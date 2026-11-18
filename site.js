const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copy);
    await navigator.clipboard.writeText(target.textContent.trim());
    const original = button.textContent;
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = original; }, 1400);
  });
});
