function findElement(arr, func) {
  let num = 0;
  num = arr.find(nb => func(nb))
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
