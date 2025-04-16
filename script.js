const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
  dropdownMenu.classList.remove('hidden');
  menuBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  dropdownMenu.classList.add('hidden');
  closeBtn.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

// Show/hide "Back to Top" button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
  }
});
