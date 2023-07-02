// 1. При клике на кнопку меню, у элемента ul появляется класс active (если его нет), а если есть класс active - удалять его

const menu_icon = document.querySelector('.menu_icon');
const nav_menu = document.querySelector('.header ul')

menu_icon.addEventListener('click', function(){
    nav_menu.classList.toggle('active')
})