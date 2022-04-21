function bouncer(arr) {
  const resultTruthy = [];
  arr.map(el => {
    if(Boolean(el))
      resultTruthy.push(el);
  })
  return resultTruthy;
}

bouncer([7, "ate", "", false, 9]);
