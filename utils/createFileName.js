const createFileName = (number, str) => {
  str = str.replace(/\s/g, '-')
  return `${number}-${str}.js`
};