var home =
webpackJsonp_name_([0],{

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(0);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.showMenu = function () {

  var menu = new _menu2.default({
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

/***/ })

},[7]);