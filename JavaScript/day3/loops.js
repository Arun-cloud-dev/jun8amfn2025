// for (let i = 0; i <= 5; i++){
//     console.log("For loop:", i);
// }




// let i = 1;

// while (i <= 0) {
//     console.log("while Loop:", i);
//     i++
// }



// let i = 2; 

// do {
//     console.log("do-while Loop: ", i);
//     i++
// }while (i <= 1)




const people = {
    name: "meena",
    age: 22,
    city: "kerala",
};


for (let key in people) {
    console.log(key +" --"+ people[key]);
}






const colors = ["red", " green", "yellow ", "black"];

// const colors = "colorreeiluadgjkghsakjghadjksfgjkadgsf";


for (let color of colors) {
    console.log("color:" , color);
}