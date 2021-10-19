'use strict'
const btnbox = document.querySelector('.scroll');
const from = btnbox.querySelector('.from');
const by = btnbox.querySelector('.to');
const tospacial = btnbox.querySelector('.tospacial');
const spacialBox = document.querySelector('.cake').getClientRects();


from.addEventListener('click', () => {
    window.scrollBy(0, -100);
})


by.addEventListener('click', () => {
    window.scrollBy(0, 100);
})

tospacial.addEventListener('click', () =>{
    window.scrollTo(spacialBox[0].x, spacialBox[0].top);
})

