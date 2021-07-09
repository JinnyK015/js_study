'use strict';


let drawing = false;

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");


ctx.strokeStyle= "#000000";
ctx.lineWidth= 2.5;

console.log(canvas.width, canvas.height);

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;



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
    }),

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
    }),

    canvas.addEventListener('mouseup', (e) =>{
        drawing = false;
    }),

    canvas.addEventListener('mouseleave', (e) => {
        drawing = false;
    })

