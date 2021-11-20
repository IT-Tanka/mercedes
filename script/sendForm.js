const formItems=document.querySelector('.form-test-drive');

let data={};
formItems.addEventListener('submit',(event)=>{
    event.preventDefault();
    for ({name, value} of formItems){
        if (name){
            data[name]=value;
        }
    }
    // console.log(data);
    // console.log('JSON.stringify(data): ', JSON.stringify(data));

    fetch('https://jsonplaceholder.typicode.com/posts'
        ,{method:'POST', body: JSON.stringify(data)}
    )
    
    .then(response=>
        {if (response.status===200 || response.status===201) 
            {
            return response.json();
                // console.log(response.json())}
            }
        else{
            throw new Error(response.status);
        }
        })
    .then(data=>
        {alert('Данные успешно сохранены');
        formItems.reset();
        // console.log(data)
        })
    .catch(error=>{alert('Произошла ошибка, статус '+ error.message)});
})

