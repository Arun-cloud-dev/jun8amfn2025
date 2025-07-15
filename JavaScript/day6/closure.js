// function outer() {
//     let name = "arun";

//     function inner() {
//         console.log("heelo "+ name);
//     }
//     return inner;

// } 

// let greet = outer();

// greet();


// function greet(name, callback) {
//     console.log("hello" + name);
//     callback();
// }

// function sayBye() {
//     console.log("goodbye");
// }

// greet ("Arun", sayBye)


// Pomise





// let promise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("it worked ")
//     } else {
//         reject("it failed")
//     }
// });


// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// async function getData() {
//   try {
//     let response = await fetch("https://api.github.com/users/arun-cloud-dev/followers");
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   } finally {
//       console.log("code ran succesfully");
      
//   }
// }

// getData();




// let name = " Aru"

// console.log(`Hello , ${name}`);




// let person = {
//     name: "arun",
//     age: 25,
// }

// let { name, age } = person;
// console.log(name,age);


// let colors = ["red", "blue"];
// let [first, second] = colors;
// console.log(first)






// function greet(name = "guest") {
//     console.log("hello " + name);
// }


// greet("arun");

let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5]
console.log(arr2);



function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 6);
}

console.log(sum(1, 2, 3));