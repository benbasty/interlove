const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  if (!question || !answer) return;

  const answerId = answer.id || `faq-answer-${Math.random().toString(36).slice(2)}`;
  answer.id = answerId;
  question.setAttribute('aria-controls', answerId);
  question.setAttribute('aria-expanded', 'false');

  question.addEventListener('click', () => {
    const willOpen = !item.classList.contains('active');
    item.classList.toggle('active', willOpen);
    question.setAttribute('aria-expanded', String(willOpen));

    // Close others if needed (optional)
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
