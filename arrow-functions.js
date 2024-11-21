// Traditional Function
function sum(a, b) {
    return a+b;
}

// Arrow Function
let sumArrow = (a, b) => a+b; // Anonymous Function

let sumArrowMultiLine = (a, b) => {
    if(a < 0) {
        a++;
    }
    if(b < 0) {
        b++;
    }
    return a+b;
}

let user = {
    "name": "Abid Khan",
    "email": "abid@gmail.com",
    "birthday": "2024-04-28",
    "age": 30,
    "schools": [
        "CCPC",
        "CC",
        "IIUC"
    ],
    "salary": 100.5,
    "isWishAllowed": false
};

console.log(user.email);

console.log(user);


console.log(sum(3, 5));