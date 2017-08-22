const assert = require('assert');
const algorithms = require('../index.js');

const sortingAlgorithms = [
  {
    name: 'Bubble sort',
    method: algorithms.bubble,
  },
  {
    name: 'Insertion sort',
    method: algorithms.insertion,
  },
  {
    name: 'Merge sort',
    method: algorithms.merge,
  },
];

const actualArray = [8, 1, 3, 6, 2, 5, 4, 7,];
const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8,];

describe('sorting-algorithms', () => {

  sortingAlgorithms.map((algorithm) => {
    describe(`${algorithm.name}`, () => {
      it('Base case', () => {
        assert.deepEqual(algorithm.method(actualArray), expectedArray);
      });
    });
  });
});
