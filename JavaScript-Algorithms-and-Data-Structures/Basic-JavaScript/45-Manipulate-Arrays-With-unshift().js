// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
console.log(myArray); // [ [ 'dog', 3 ] ]

// Only change code below this line
myArray.unshift(["Paul",35]);
console.log(myArray); // [ [ 'Paul', 35 ], [ 'dog', 3 ] ]
