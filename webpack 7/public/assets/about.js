var about =
webpackJsonp_name_([1],{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(0);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.showMenu = function () {

  var menu = new _menu2.default({
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

/***/ })

},[5]);