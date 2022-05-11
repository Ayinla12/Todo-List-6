const form=document.querySelector(".main-wrapper");
const ul=document.querySelector(".wrapper");
const search=document.querySelector(".input-search");


// add todos
form.addEventListener("submit",e=>{
        e.preventDefault();
        const add=form.some.value.trim();
        if(add.length){
                ul.innerHTML+=`<li class="flex">
                <span>${add}</span>
                <i class="fa-solid fa-trash-can delete"></i>
             </li>`
                form.reset();   
        }
});

//delete todos
ul.addEventListener("click",e=>{
        if(e.target.classList.contains("delete")){
                const li=e.target.parentElement;
                ul.removeChild(li);
             }        
});

//search todos
search.addEventListener("keyup",e=>{
        const target=e.target.value.toLowerCase();
        const lis=ul.getElementsByTagName("li");
        Array.from(lis).forEach( li =>{
                const todo=li.firstElementChild.textContent.toLowerCase();
                if(todo.indexOf(target) !=-1){
                        li.style.display="flex"
                }else{
                        li.style.display="none"
                }
        });
});
       



