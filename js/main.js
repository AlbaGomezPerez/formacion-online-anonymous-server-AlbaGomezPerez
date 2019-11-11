'use strict';

const menuButton = document.querySelector('.nav-trigger');
const infoMenu = document.querySelector('.nav');
const cancelButton = document.querySelector('.nav-close');

infoMenu.classList.add('infoHidden');


function openMenu() {
    console.log('hola');
    if (infoMenu.classList.contains('infoHidden')) {
        infoMenu.classList.remove('infoHidden');
    }
}

function openMainPage() {
    console.log('segundo');
    infoMenu.classList.add('infoHidden');
}


menuButton.addEventListener('click', openMenu);
cancelButton.addEventListener('click', openMainPage);







