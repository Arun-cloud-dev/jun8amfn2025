let fruit = ["apple", "banna", "orange"];

console.log(fruit[0]);
console.log(fruit[2]);


fruit.push("Mango")
console.log(fruit);


fruit.pop();
console.log(fruit);


fruit.shift();
console.log(fruit);

fruit.unshift("Pineapple");
console.log(fruit);


let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled);


let ages = [12, 13, 15, 56, 78];

let adults = ages.filter(age => age >= 18);
let minor = ages.filter( ar => ar <= 18)
console.log(adults);
console.log(minor);


let sum = numbers.reduce((total, num) => total + num, 45);
console.log(sum);




let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [22, 33, [444, 555, 666]]],
];

console.log(matrix[2][2][2][2]);