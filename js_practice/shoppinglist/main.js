'use strict'

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector(".shoppinglist");
const enterbtn =document.querySelector('.enter');

function handledel(event) {
  const li = event.target.parentNode;
  li.remove();
}

function showlist(text) {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.innerText = text;
    btn.innerText= 'del';

    btn.addEventListener('click', handledel);

    li.appendChild(btn);
    ul.appendChild(li);
    
   

}

function handleSubmit(event){
    event.preventDefault();
    showlist(input.value);
    input.value ="";
}



form.addEventListener('submit', handleSubmit);
enterbtn.addEventListener('click', handleSubmit);
