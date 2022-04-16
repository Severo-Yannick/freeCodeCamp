function truncateString(str, num) {
  let result = '';
  const arrStr = str.split('');
  for (let i = 0; i < num && i < str.length; i++) {
    result += arrStr[i];
  }
  return result.length < str.length ? result + '...' : result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
