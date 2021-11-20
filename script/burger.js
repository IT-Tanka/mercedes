import {menuItems} from './scroll.js';

const burgerMenu=document.querySelector('.humburger-menu');
const menu=document.querySelector('.menu');
// const burgerMenuItems=document.querySelectorAll('.menu-list__link');


function toggleMenu(){
    menu.classList.toggle('menu-active');
    burgerMenu.classList.toggle('humburger-menu-active');
}

burgerMenu.addEventListener('click',()=>{
toggleMenu();
}) 

menuItems.forEach((item)=>{item.addEventListener('click',()=> toggleMenu())});

// for (let item of  burgerMenuItems){
//     item.addEventListener('click',()=> toggleMenu());
// }


