'use strick'
const screenSize = document.querySelector('.day1');

function updateTag(){
    screenSize.innerHTML=`
    window.screen:${window.screen.width}*${window.screen.height}<br>
    window.outer:${window.outerWidth}*${window.outerHeight}<br>
    window.inner:${window.innerWidth}*${window.innerHeight}<br>
    document.El.clients:${document.documentElement.clientWidth}*${document.documentElement.clientHeight}<br>`;

}
window.addEventListener('resize', () =>{
    updateTag();
});

updateTag();
// 이벤트 리스너에다가하면 초기화면이 안나오니, 펑션으로 바꾼뒤에 이니셜라이징 하는식으로 한다.