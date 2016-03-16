requirejs.config({
  paths: {}
});

requirejs(['require'], function (require) {
  var mod = require('./module.js');
});
