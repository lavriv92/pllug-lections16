'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function () {
  function User(firstName, lastName) {
    (0, _classCallCheck3.default)(this, User);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  (0, _createClass3.default)(User, [{
    key: 'fullName',
    get: function get() {
      return this.firstName + ' ' + this.lastName;
    },
    set: function set(fullName) {
      var _fullName$split = fullName.split(' ');

      var _fullName$split2 = (0, _slicedToArray3.default)(_fullName$split, 2);

      this.firstName = _fullName$split2[0];
      this.lastName = _fullName$split2[1];

      console.log(this.firstName);
    }
  }]);
  return User;
}();

exports.default = User;