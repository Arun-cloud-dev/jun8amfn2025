// try {
//     //code that may throw error 
// } catch {
//     //codeto handkle the error 
// } finally {
//     // code that runs always 
// }

// try {
//     let num = 10;
//     console.log(num / 2);
//     console.log(ar)
// } catch (error) {
//     console.log("something Went Wrong :", error.message);
// } finally {
//     let br = 20;
// console.log(br);

// }


let json = '{"name":"Arun", age:25}'; 

try {
    let usr = JSON.parse(json);
    console.log(usr.name);
} catch (err) {
    console.log("invalid JSON:", err.message);
} finally {
    console.log("parsing is done succesfully ");
    
}