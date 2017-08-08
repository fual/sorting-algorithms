module.exports = (arr) => {
  for (let i = 1; i < arr.length ; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      arr.swap(j - 1, j);
    }
  }
  return arr;
};
