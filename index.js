Array.prototype.swap = function(index1, index2) {
  const value1 = this[index1];
  const value2 = this[index2];
  this[index1] = value2;
  this[index2] = value1;
};

const bubbleSort = require('./bubble.js');
const insertionSort = require('./insertion.js')
const mergeSort = require('./merge.js')

//console.log(bisection([1,3,2,8,7,6,5,4], (...item) => mergeArray(...item)));
console.log(mergeSort([1,3,2,8,7,6,5,4]));
