//Seleccionamos elementos html

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

//Definimos la función

function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');


}

//llamamos a la función con un evento

burger.addEventListener('click', function() {

    toggleNav();
}
);