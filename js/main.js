
//query selector botón menú:
//Al hacer click en menú, la función pone la clase "mainHidden" y quita la clase "infoHidden"
'use strict';

const menuButton = document.querySelector('.nav-trigger');
const infoMenu = document.querySelector('.nav');
const cancelButton = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');
console.log(menuButton);
console.log(infoMenu);

nav.classList.add('infoHidden');

function openMenu() {
    console.log('hola');
    if (infoMenu.classList.contains('infoHidden')) {
        infoMenu.classList.remove('infoHidden');
    } else {
        infoMenu.classList.add('infoHidden');
    }

}

menuButton.addEventListener('click', openMenu);




// const navTrigger  = document.getElementById("nav-trigger");
// const nav = document.getElementById("nav");
//
// function openMenu(){
//         ("nav").fadeToggle("slow");
// };
//
// navTrigger.addEventListener('click', openMenu);

