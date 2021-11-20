
const btns=document.querySelectorAll('.feature__link');
const lists=document.querySelectorAll('.feature-sub');

btns.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        if (!(btn.classList.contains('feature__link_active'))){
            btns.forEach((btn)=>{
            btn.classList.remove('feature__link_active');
            })
            btn.classList.add('feature__link_active');
            lists.forEach((listItem)=>{
                listItem.classList.add('hidden');
            })
            lists[index].classList.remove('hidden');
        }else{
            btn.classList.remove('feature__link_active');
            lists[index].classList.add('hidden');
        }
        
    })
})