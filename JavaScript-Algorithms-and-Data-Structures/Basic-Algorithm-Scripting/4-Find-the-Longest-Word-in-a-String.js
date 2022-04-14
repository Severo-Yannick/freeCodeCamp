function findLongestWordLength(str) {
  let largest = 0;
  str.split(' ')
    .map(word => word.length)
    .filter(word => {
      if(word > largest)
        largest = word;
    });

  return largest;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
