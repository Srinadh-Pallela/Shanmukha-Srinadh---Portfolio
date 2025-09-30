// Hamburger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active'); // For animation if needed
});

// Contact form submission simulation
const contactForm = document.querySelector('.contact-form');
const modal = document.querySelector('.modal');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission

  // You can add validation here if needed

  // Show modal on successful submission
  modal.classList.add('show');

  // Optionally reset form
  contactForm.reset();
});

// Close modal on clicking outside modal content or pressing Escape
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
  }
});
