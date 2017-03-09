'use strict';

import Menu from './menu';

let pandaMenu = new Menu({
  title: "Panda's menu",
  items: [{
    text: 'Eggs',
    href: '#eggs'
  }, {
    text: 'Meat',
    href: '#meat'
  }, {
    text: '99% of food - bamboo!',
    href: '#bamboo'
  }]
});


document.body.appendChild(pandaMenu.elem);
