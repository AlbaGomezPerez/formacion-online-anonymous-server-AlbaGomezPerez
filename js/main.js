
//query selector botón menú:
//Al hacer click en menú, la función pone la clase "mainHidden" y quita la clase "infoHidden"
'use strict';

const page = document.querySelector('.page');
const menuButton = document.querySelector('.nav-trigger');
const infoMenu = document.querySelector('.nav');
const cancelButton = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

nav.classList.add('infoHidden');


function openMenu() {
    console.log('hola');
    if (nav.classList.contains('infoHidden')) {
        infoMenu.classList.remove('infoHidden');
    }
}

function openMainPage() {
    console.log('segundo');
    infoMenu.classList.add('infoHidden');
}

menuButton.addEventListener('click', openMenu);
cancelButton.addEventListener('click', openMainPage);





