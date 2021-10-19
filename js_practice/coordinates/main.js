const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const text = document.querySelector(".text");




window.addEventListener('mouseover', (e) =>{
  let targetHeight = e.clientY - (target.height /2);
  let targetWidth = e.clientX - (target.width /2);

  horizontal.style.transform = `translateY(${e.clientY}px)`;
  vertical.style.transform = `translateX(${e.clientX}px)`;

  target.style.transform =`translate(${targetWidth}px, ${targetHeight}px)`;

  text.style.transform =`translate(${e.clientX + 30}px, ${e.clientY + 15}px)`;

  text.innerText=`X: ${e.clientX}px Y: ${e.clientY}px`;
})