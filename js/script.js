'use strict';

const navbarToggle = () => {
const nav = document.querySelector('.mainnav');
nav.classList.toggle('toggleShow');
}
document.querySelector('.fa-bars').addEventListener('click', navbarToggle);
