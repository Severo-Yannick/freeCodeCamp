function frankenSplice(arr1, arr2, n) {
  const newArray = arr2.slice();
  newArray.splice(n, 0, ...arr1);
  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
