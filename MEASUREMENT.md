# Interlove measurement guide

## Conversion measurement

A conversion is a successful Formspree submission from one of these forms:

- Discovery session request (`booksession.html`)
- Custom plan request (`workwithme.html`)
- General inquiry (`about.html`)

Each submitted inquiry includes its form source, submission page, referring website origin, campaign source/medium/name when supplied through `utm_*` query parameters, UTC submission time, and visitor time zone. Formspree remains the source of truth for conversion counts.

The form handler emits `interlove:form-attempt`, `interlove:form-success`, and `interlove:form-error` browser events. A consent-managed analytics service can subscribe to these later without changing form behavior.

Suggested monthly measures:

| Measure | Calculation |
| --- | --- |
| Completed inquiries | Successful Formspree submissions |
| Discovery requests | Submissions where `form_source` is `Discovery session request` |
| Custom plan requests | Submissions where `form_source` is `Custom plan request` |
| Inquiry delivery rate | Successful submissions divided by attempts, once an analytics service is configured |
| Campaign inquiries | Submissions grouped by `campaign_source`, `campaign_medium`, and `campaign_name` |

Use campaign links in this format:

`https://benbasty.github.io/interlove/booksession.html?utm_source=instagram&utm_medium=social&utm_campaign=profile`

Do not place names, email addresses, relationship details, or other personal information in campaign parameters.

## Reliability measurement

The `Site health` GitHub Actions workflow runs every six hours and can also be started manually. It checks the public pages, critical assets, and Formspree endpoint without submitting a message. It records HTTP status, response time, and response size in the workflow summary, and fails when a required resource is unavailable or empty.

Review results in the repository's **Actions** tab under **Site health**. GitHub sends workflow-failure notifications according to the repository owner's notification settings.
