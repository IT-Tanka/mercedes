const btnOpenModal=document.querySelector('.more');
const modal=document.querySelector('.modal');


btnOpenModal.addEventListener('click',()=>{
    modal.classList.remove('hidden');
})

modal.addEventListener('click',(event)=>{
    if(event.target.classList.contains('modal__close') || event.target.classList.contains('overlay') ) {
        modal.classList.add('hidden');
    }
})