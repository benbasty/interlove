document.querySelectorAll(".page-form").forEach((form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".form-status");

  if (!submitButton || !status) return;

  const defaultLabel = submitButton.textContent;
  const successMessage = form.dataset.successMessage || "Thank you. Your message has been sent.";

  form.addEventListener("submit", async (event) => {
    if (!form.checkValidity()) return;

    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    form.setAttribute("aria-busy", "true");
    status.className = "form-status form-status--pending";
    status.textContent = "Sending your message securely...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      submitButton.textContent = "Sent";
      status.className = "form-status form-status--success";
      status.textContent = successMessage;
      status.focus();
    } catch (error) {
      submitButton.disabled = false;
      submitButton.textContent = defaultLabel;
      status.className = "form-status form-status--error";
      status.textContent = "Your message could not be sent. Please try again or email benbasty@gmail.com.";
      status.focus();
    } finally {
      form.removeAttribute("aria-busy");
    }
  });
});
