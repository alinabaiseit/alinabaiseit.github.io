const menuToggle = document.querySelector('#toggle-nav');
const navMenu = document.querySelector('#nav-container');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
