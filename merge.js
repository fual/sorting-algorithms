const mergeArray = (arr1, arr2) => {
  let bufferArray = [];

  let i = 0;
  let j = 0;
  let isCompleted;

  while (!isCompleted) {
    if (i === arr1.length) {
      bufferArray = [...bufferArray, ...arr2.slice(j)];
      isCompleted = true;
    }
    if (j === arr2.length) {
      bufferArray = [...bufferArray, ...arr1.slice(i)];
      isCompleted = true;
    }

    if (arr1[i] < arr2[j]) {
      bufferArray.push(arr1[i]);
      i++;
    }
    if (arr2[j] < arr1[i]) {
      bufferArray.push(arr2[j]);
      j++;
    }
  }
  return bufferArray;
};

const divideAndConquer = (arr, callBack) => {
  const length = arr.length / 2;
  const part1 = arr.slice(0, length);
  const part2 = arr.slice(length);

  let b1;
  let b2;
  if (part1.length !== 1) {
    b1 = divideAndConquer(part1, callBack);
  }
  if (part2.length !== 1) {
    b2 = divideAndConquer(part2, callBack);
  }
  if (part2.length === 1 && part1.length === 1) {
    return callBack(part1, part2);
  }
  return callBack(b1, b2);
};

module.exports = (arr) => {
  return divideAndConquer(arr, mergeArray);
};
