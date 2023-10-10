const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


var header = document.getElementById("header");
var sticky = header.offsetTop;

window.onscroll = function(){
    if (window.pageYOffset >= header) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
        }
    }