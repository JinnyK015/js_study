'use strict';


let drawing = false;
let x = 0;
let y = 0;


const canvas = document.getElementById("jsCanvas");



if(canvas){
    canvas.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        drawing = true;
    }),

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        const x = e.offsetX;
        const y = e.offsetY;
    }),

    canvas.addEventListener('mouseup', (e) =>{
        if(drawing === true){
            drawing = false;
            x = 0;
            y = 0;
        }
    }),

    canvas.addEventListener('mouseleave', (e) => {
        drawing = false;
    })
}


