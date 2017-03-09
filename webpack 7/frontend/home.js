'use strict';

import Menu from './menu';

exports.showMenu = function() {

    let menu = new Menu({
      title: "Комнаты дома",
      items: [{
        text: 'Детская',
        href: '#childroom'
      }, {
        text: 'Кухня',
        href: '#kitchen'
      }, {
        text: 'Гостиная',
        href: '#guestroom'
      }]
    });

    document.body.appendChild(menu.elem);
  };
