const form = document.querySelector(".todoform");
const input = form.querySelector("input");
const list = document.querySelector(".todolist");

const TODO_LS = 'todos';
let todositems = [];

function savetodo(todoitem) {
    localStorage.setItem(TODO_LS, JSON.stringify(todoitem))

}



function deltodo(e){
    const li = e.target.parentElement;
    li.remove();


}

function print(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delbtn = document.createElement("button");

    span.innerText = text;
    delbtn.innerText = "✨";

    delbtn.addEventListener('click', deltodo);

    li.appendChild(span);
    li.appendChild(delbtn);
    list.appendChild(li);
}


function handleSubmit(e){
    e.preventDefault();
    currentText = input.value;
    

    const todoObj = {
        name:currentText,
        id: Date.now()
    };
    todositems.push(todoObj);
    print(todoObj);
    savetodo(todoObj);

    input.value = '';
}


   const todolist_storage =  localStorage.getItem(TODO_LS)

    if(!todolist_storage){
       const parsedtodo = JSON.parse(todolist_storage);
        todoitem = parsedtodo;
        parsedtodo.forEach(print);
    }


form.addEventListener('submit', handleSubmit);