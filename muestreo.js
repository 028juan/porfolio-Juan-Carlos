const menu = document.querySelectorAll('.menu-desplegable nav li a');
const check = document.getElementById('check-menu')
menu.forEach((m) =>{
    m.addEventListener('click',() => check.checked=false);
});

let diploma="";
function verDiploma(name){
    diploma= document.getElementById(name);
    diploma.classList.toggle('oculto')
}