export const menuItems=document.querySelectorAll('.menu-list__link');
const mainScroll=document.querySelector('.main__scroll');
const arrItems=[...menuItems, mainScroll];

for (let item of arrItems){
    item.addEventListener('click',(event)=>{
        event.preventDefault();
        let ID=event.target.getAttribute('href').substr(1);
    
        document.getElementById(ID).scrollIntoView({behavior: 'smooth', block:'start'});

    })
}