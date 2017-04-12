"use strict";

var _emailValidator = require("email-validator");

var _emailValidator2 = _interopRequireDefault(_emailValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_emailValidator2.default.validate("test"));
console.log(_emailValidator2.default.validate("test@test.com"));
