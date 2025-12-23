// Global Scripts

document.addEventListener('DOMContentLoaded', () => {
  console.log('Photobiomodulation Site Loaded');
  
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Simple toggle logic, in real app would animate
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.right = '0';
      navMenu.style.background = 'white';
      navMenu.style.padding = '1rem';
      navMenu.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
    });
  }

  // Sticky Header Active State
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Simple Cart Placeholder
  const cartBtns = document.querySelectorAll('.add-to-cart');
  cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.dataset.product;
      alert(`Added ${product} to quote request!`);
      // In a real app, update localStorage and UI
    });
  });
});
