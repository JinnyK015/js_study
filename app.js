'use strict';
const canvas = document.getElementById("jsCanvas");
const colors = document.querySelectorAll(".jsColor");
const size = document.getElementById("jsRange");
const ctx = canvas.getContext("2d");

// we need to bring canvas's size( couldn't read from css)
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

//basic color and weight of line (when you first painting)
ctx.strokeStyle= "#000000";
ctx.lineWidth= 3;
let drawing = false;

canvas.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    if(!drawing){
        ctx.beginPath(); // call start creat new path 
        ctx.moveTo(x,y); // start of coordinates좌표를따라 point create  = making path
    } else {
        ctx.lineTo(x,y); // 선 끝 좌표  end of line coordinates.
        ctx.stroke(); // 선을 그린다.
    }
}) 

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
})

canvas.addEventListener('mouseup', (e) =>{
    drawing = false;
})

canvas.addEventListener('mouseleave', (e) => {
    drawing = false;
}) 


Array.from(colors).forEach(color => color.addEventListener('click', (e) =>{
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle= color;
}));

if(size){
    size.addEventListener("input", (e) =>{
        const size = e.target.value;
        ctx.lineWidth= size;
    })
}