Array.prototype.swap = (index1, index2) => {
  const value1 = this[index1];
  const value2 = this[index2];
  this[index1] = value2;
  this[index2] = value1;
};

const bubble = require('./bubble.js');
const insertion = require('./insertion.js');
const merge = require('./merge.js');

module.exports = {
  bubble,
  insertion,
  merge,
};
