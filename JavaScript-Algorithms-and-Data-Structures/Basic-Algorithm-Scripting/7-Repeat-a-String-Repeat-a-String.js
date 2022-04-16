function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

// Other solution with recursion
repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
  if(num <= 0) {
    return "";
  }
    return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);
