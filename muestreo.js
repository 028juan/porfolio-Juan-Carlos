window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrusel-lista'),{
        slidesToShow:1,
        sliderToScroll:1,
        draggable:true,
        dots:'.carrusel-indicadores',
        arrows:{
            prev:'.carrusel-anterior',
            next:'.carrusel-siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
               
              }
            }
          ]


    });
});






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


