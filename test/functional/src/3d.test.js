const TestController = require('./mvc/TestController');

new TestController([
  // [-20, -10, 0],
  // [-20,  10, 0],
  // [ 20,  10, 0],
  // [ 20, -10, 0],
  [0, 0, 0],
  [20, 0, 0],
  [20, 10, 0],
  [10, 5, 0],
]);
