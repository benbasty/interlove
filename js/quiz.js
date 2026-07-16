(function () {
  const tallyScript = "https://tally.so/widgets/embed.js";
  const typeformScript = "https://embed.typeform.com/next/embed.js";

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
    document.querySelectorAll("iframe[data-tally-src]").forEach((iframe) => {
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

  loadEmbeds();
})();
