const person = {
    name: "bezant",
    age: 34,
}


const jsonstring = JSON.stringify(person);

console.log(jsonstring);



const obj = JSON.parse(jsonstring);

console.log(obj);