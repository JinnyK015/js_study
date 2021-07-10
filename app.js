'use strict';
const canvas = document.getElementById("jsCanvas");
const colors = document.querySelectorAll(".jsColor");
const size = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");
const ctx = canvas.getContext("2d");

// save file as a img (png)
save.addEventListener("click", (e) =>{
    const imgURL = canvas.toDataURL();
    const imgLink = document.createElement("a");
    imgLink.href = imgURL;
    //for cute and little fun
    const emoj = ['😎','😍','😂','😑','😊','😘','🤣','❤','🎖','🏆','🥰','🤩'];
    let cute = emoj[Math.floor(Math.random()*emoj.length)];
    imgLink.download = `MyPaint${cute}`;
    imgLink.click();
})


// we need to bring canvas's size( couldn't read from css)
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

//basic color and weight of line (when you first painting)
const BASE_COLOR = "#000000";
ctx.strokeStyle= BASE_COLOR;
ctx.lineWidth= 3;
ctx.fillStyle= BASE_COLOR;


let drawing = false;
let filling = false;

let x =0;
let y =0;

//drawing method
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

// lock contextmenu
canvas.addEventListener("contextmenu", (e) =>{
    e.preventDefault();
})

//filling canvas function & click event
canvas.addEventListener('click', (e)=>{
    if(filling === true){
        drawing = false;
        ctx.fillRect(x,y, canvas.width, canvas.height);
    }
})

// color chagne function
Array.from(colors).forEach(color => color.addEventListener('click', (e) =>{
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle= color;
    ctx.fillStyle = color;
}));

// Brush size function
if(size){
    size.addEventListener("input", (e) =>{
        const size = e.target.value;
        ctx.lineWidth= size;
    })
}

//button change fucntion

if(mode){
    mode.addEventListener("click", (e) =>{
        if(filling === true){
            filling = false;
            mode.innerHTML ='<i class="fas fa-fill-drip" active></i> Fill';
            
        } else{
            filling = true;
            mode.innerHTML ='<i class="fas fa-pencil-alt"></i> Draw';
        }
        
    })
}



