'use strict'

const pointBox = document.querySelector('.cake');
const coodi = pointBox.getBoundingClientRect();

function coodinates(e){
    console.log(coodi);
    console.log(`Client : ${coodi.x} , ${coodi.y}`);
    console.log(`Event Client : ${e.x} , ${e.y}`);
    console.log(`Page : ${e.pageX} , ${e.pageY}`)
}


pointBox.addEventListener('click', (e)=> {
   coodinates(e);
 });