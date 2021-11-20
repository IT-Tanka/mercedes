const tabsHandlerList=document.querySelectorAll('[data-tabs-handler]');
const tabsFieldList=document.querySelectorAll('[data-tabs-field]');

for (let item of tabsHandlerList){
    item.addEventListener('click',()=>{
        tabsHandlerList.forEach((i)=>i.classList.remove('design-list__item_active'));
        item.classList.add('design-list__item_active');
        
        tabsFieldList.forEach((i)=>{
            if (i.dataset.tabsField===item.dataset.tabsHandler){
                i.classList.remove('hidden');
            }else{
                i.classList.add('hidden');
            }
        })
    })
}