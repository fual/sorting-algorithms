module.exports = (arr) => {
  for (let j = 0; j < arr.length - 2; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      const cur = arr[i];
      const next = arr[i + 1];
      if (cur > next) {
        arr.swap(i, i + 1);
      }
    }
  }
  return arr;
};
