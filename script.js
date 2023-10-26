let mobile_menu = document.querySelector('.mobile-menu');
let menu_button = document.querySelector('.menu-icon');
let menu_is_open = mobile_menu.getAttribute('data-menu-open');

menu_button.addEventListener('click', () => {
  menu_button.setAttribute('src', menu_is_open ? 'images/close-menu.svg' : 'images/menu.svg');
  mobile_menu.style.display = menu_is_open ? 'block' : 'none';
  menu_is_open = !menu_is_open;
});