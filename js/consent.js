(function () {
  const storageKey = "interlove-consent-v1";
  let banner;

  function readPreference() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function writePreference(value) {
    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
      // The current page still honors the visitor's choice when storage is unavailable.
    }
  }

  function closeBanner() {
    if (banner) banner.remove();
    banner = null;
  }

  function choose(value) {
    writePreference(value);
    closeBanner();
    document.dispatchEvent(new CustomEvent("interlove:consent-changed", {
      detail: { embeddedServices: value === "embedded-services" }
    }));
  }

  function openPreferences() {
    closeBanner();
    banner = document.createElement("section");
    banner.className = "cookie-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-labelledby", "cookie-consent-title");
    banner.innerHTML = `
      <h2 id="cookie-consent-title">Your privacy choices</h2>
      <p>Interlove uses essential browser storage to remember this choice. Tally and Typeform quiz embeds load only if you allow embedded services. <a href="cookies-policy.html">Read the Cookie Policy</a>.</p>
      <div class="cookie-consent__actions">
        <button type="button" data-consent="essential">Essential only</button>
        <button type="button" data-consent="embedded-services">Allow quiz embeds</button>
      </div>`;
    document.body.appendChild(banner);

    banner.querySelectorAll("[data-consent]").forEach((button) => {
      button.addEventListener("click", () => choose(button.dataset.consent));
    });

    banner.querySelector("button").focus();
  }

  window.InterloveConsent = {
    allowsEmbeddedServices: () => readPreference() === "embedded-services",
    allowEmbeddedServices: () => choose("embedded-services"),
    openPreferences
  };

  document.querySelectorAll("[data-open-cookie-settings]").forEach((button) => {
    button.addEventListener("click", openPreferences);
  });

  if (!readPreference()) openPreferences();

  document.dispatchEvent(new CustomEvent("interlove:consent-ready", {
    detail: { embeddedServices: window.InterloveConsent.allowsEmbeddedServices() }
  }));
})();
