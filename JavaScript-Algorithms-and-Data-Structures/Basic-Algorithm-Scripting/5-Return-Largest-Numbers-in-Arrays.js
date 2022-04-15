function largestOfFour(arr) {
  let largestArray = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    arr[i].filter(nb => {
      if (nb > largest)
        largest = nb;
    });
    largestArray.push(largest);
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
