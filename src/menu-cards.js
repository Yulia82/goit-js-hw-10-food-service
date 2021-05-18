import menu from './menu.json';
import menuCardsTmpl from './templates/menu-cards.hbs'

const menuCallery = document.querySelector('.js-menu');
menuCallery.insertAdjacentHTML('afterend', menuCardsTmpl(menu));