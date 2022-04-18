function titleCase(str) {
  const words = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return words.join(' ');
}

titleCase("I'm a little tea pot");
