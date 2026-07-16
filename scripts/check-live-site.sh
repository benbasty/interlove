#!/usr/bin/env bash
set -euo pipefail

base_url="${BASE_URL:-https://benbasty.github.io/interlove}"
work_dir="$(mktemp -d)"
failures=0
summary_file="${GITHUB_STEP_SUMMARY:-/dev/null}"
trap 'rm -rf "$work_dir"' EXIT

check_url() {
  local label="$1"
  local url="$2"
  local output="$work_dir/response"
  local metrics
  local status
  local seconds
  local bytes

  if ! metrics=$(curl --location --silent --show-error --max-time 25 \
    --output "$output" --write-out '%{http_code} %{time_total} %{size_download}' "$url"); then
    printf 'FAIL  %-24s request failed  %s\n' "$label" "$url"
    printf '| %s | request failed | - | - |\n' "$label" >> "$summary_file"
    failures=$((failures + 1))
    return
  fi

  read -r status seconds bytes <<< "$metrics"
  if [[ "$status" != "200" || "$bytes" == "0" ]]; then
    printf 'FAIL  %-24s HTTP %s, %s bytes  %s\n' "$label" "$status" "$bytes" "$url"
    failures=$((failures + 1))
  else
    printf 'PASS  %-24s HTTP %s, %ss, %s bytes\n' "$label" "$status" "$seconds" "$bytes"
  fi
  printf '| %s | %s | %ss | %s |\n' "$label" "$status" "$seconds" "$bytes" >> "$summary_file"
}

check_options_endpoint() {
  local label="$1"
  local url="$2"
  local metrics
  local status
  local seconds
  local bytes

  if ! metrics=$(curl --request OPTIONS --location --silent --show-error --max-time 25 \
    --output /dev/null --write-out '%{http_code} %{time_total} %{size_download}' "$url"); then
    printf 'FAIL  %-24s request failed  %s\n' "$label" "$url"
    printf '| %s | request failed | - | - |\n' "$label" >> "$summary_file"
    failures=$((failures + 1))
    return
  fi

  read -r status seconds bytes <<< "$metrics"
  if [[ "$status" != "200" ]]; then
    printf 'FAIL  %-24s HTTP %s  %s\n' "$label" "$status" "$url"
    failures=$((failures + 1))
  else
    printf 'PASS  %-24s HTTP %s, %ss (non-submitting check)\n' "$label" "$status" "$seconds"
  fi
  printf '| %s | %s | %ss | %s |\n' "$label" "$status" "$seconds" "$bytes" >> "$summary_file"
}

printf '### Interlove live-site health\n\n' >> "$summary_file"
printf '| Resource | HTTP | Response time | Bytes |\n| --- | ---: | ---: | ---: |\n' >> "$summary_file"

check_url "Homepage" "$base_url/"
check_url "Discovery session" "$base_url/booksession.html"
check_url "Work with me" "$base_url/workwithme.html"
check_url "Quiz" "$base_url/quiz.html"
check_url "About" "$base_url/about.html"
check_url "FAQ" "$base_url/interlove-faq.html"
check_url "Privacy policy" "$base_url/privacy.html"
check_url "Cookie policy" "$base_url/cookies-policy.html"
check_url "Sitemap" "$base_url/sitemap.xml"
check_url "Quiz embed script" "$base_url/js/quiz.js"
check_url "Form handler" "$base_url/js/formHandler.js"
check_url "Measurement script" "$base_url/js/measurement.js"
check_url "Homepage stylesheet" "$base_url/css/home-premium.css"
check_options_endpoint "Formspree endpoint" "https://formspree.io/f/manjjojl"

if (( failures > 0 )); then
  printf '\n%d live-site check(s) failed.\n' "$failures"
  exit 1
fi

printf '\nAll live-site checks passed.\n'
