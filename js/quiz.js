(function () {
  const tallyScript = "https://tally.so/widgets/embed.js";
  const typeformScript = "https://embed.typeform.com/next/embed.js";

  function toggleNotices(show) {
    document.querySelectorAll("[data-embed-consent]").forEach((notice) => {
      notice.hidden = !show;
    });
  }

  function addScript(src, onload) {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (onload) onload();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = onload;
    document.body.appendChild(script);
  }

  function loadEmbeds() {
    if (!window.InterloveConsent?.allowsEmbeddedServices()) {
      unloadEmbeds();
      return;
    }

    toggleNotices(false);

    document.querySelectorAll("iframe[data-tally-src]").forEach((iframe) => {
      iframe.hidden = false;
      if (!iframe.src) iframe.src = iframe.dataset.tallySrc;
    });
    if (document.querySelector("iframe[data-tally-src]")) {
      addScript(tallyScript, () => window.Tally?.loadEmbeds());
    }

    document.querySelectorAll("[data-tf-live]").forEach((embed) => {
      embed.hidden = false;
    });
    if (document.querySelector("[data-tf-live]")) addScript(typeformScript);
  }

  function unloadEmbeds() {
    toggleNotices(true);
    document.querySelectorAll("iframe[data-tally-src]").forEach((iframe) => {
      iframe.removeAttribute("src");
      iframe.hidden = true;
    });
    document.querySelectorAll("[data-tf-live]").forEach((embed) => {
      embed.innerHTML = "";
      embed.hidden = true;
    });
  }

  document.querySelectorAll("[data-allow-embeds]").forEach((button) => {
    button.addEventListener("click", () => window.InterloveConsent?.allowEmbeddedServices());
  });

  document.addEventListener("interlove:consent-ready", loadEmbeds);
  document.addEventListener("interlove:consent-changed", loadEmbeds);
  loadEmbeds();
})();
