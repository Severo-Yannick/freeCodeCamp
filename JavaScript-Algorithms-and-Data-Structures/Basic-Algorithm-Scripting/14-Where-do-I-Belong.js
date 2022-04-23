function getIndexToIns(arr, num) {
  return arr.filter(item => item < num).length;
}

getIndexToIns([40, 60], 50);
