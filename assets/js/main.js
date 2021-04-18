const menuIcon = document.querySelector('header .menu-icon');
const navItems = document.querySelector('header .nav-items');
const backdropLayer = document.querySelector('header .backdrop-layer');

menuIcon.addEventListener('click', e => {
  navItems.classList.add('show');
});
backdropLayer.addEventListener('click', e => {
  navItems.classList.remove('show');
});
