"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _computeSourceMap = require('sucrase/dist/computeSourceMap'); var _computeSourceMap2 = _interopRequireDefault(_computeSourceMap);
var _service = require('./lib/service'); var _service2 = _interopRequireDefault(_service);


var userWithPosts = _service2.default.call(void 0, 1);
userWithPosts.then(function(x){
  console.log(x);
});