'use strict';

import Menu from './menu';

exports.showMenu = function() {

    let menu = new Menu({
      title: "О сайте",
      items: [{
        text: 'Кто придумал?',
        href: '#think'
      }, {
        text: 'Кто сделал?',
        href: '#do'
      }, {
        text: 'Кто оплатил?',
        href: '#pay'
      }]
    });

    document.body.appendChild(menu.elem);

};
