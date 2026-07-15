(function () {
  const maxFieldLength = 160;

  function clean(value) {
    return String(value || "").trim().slice(0, maxFieldLength);
  }

  function referrerOrigin() {
    if (!document.referrer) return "Direct or unavailable";

    try {
      return new URL(document.referrer).origin;
    } catch (error) {
      return "Unavailable";
    }
  }

  function setHiddenField(form, name, value) {
    let field = form.elements.namedItem(name);
    if (!field) {
      field = document.createElement("input");
      field.type = "hidden";
      field.name = name;
      form.appendChild(field);
    }
    field.value = clean(value);
  }

  function prepareForm(form) {
    const params = new URLSearchParams(window.location.search);

    setHiddenField(form, "submission_page", window.location.pathname);
    setHiddenField(form, "referrer_origin", referrerOrigin());
    setHiddenField(form, "campaign_source", params.get("utm_source") || "Not provided");
    setHiddenField(form, "campaign_medium", params.get("utm_medium") || "Not provided");
    setHiddenField(form, "campaign_name", params.get("utm_campaign") || "Not provided");
    setHiddenField(form, "visitor_timezone", Intl.DateTimeFormat().resolvedOptions().timeZone || "Unavailable");
    setHiddenField(form, "submitted_at_utc", new Date().toISOString());
  }

  document.querySelectorAll(".page-form").forEach((form) => {
    prepareForm(form);
    form.addEventListener("submit", () => prepareForm(form), { capture: true });
  });

  window.InterloveMeasurement = { prepareForm };
})();
