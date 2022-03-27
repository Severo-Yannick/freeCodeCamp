function checkSign(num) {
  return num > 0 ? 'positive' 
    : num < 0 ? 'negative' 
    : num === 0 ? 'zero' : null;
}

checkSign(11);