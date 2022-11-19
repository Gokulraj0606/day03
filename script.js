// 1) JSON iterate over all for loop
let json = [{
    "name": "ragul",
    "roll no": "4534256",
    "age": 31,
    "email": "hello1@email.com"
},
{
    "name": "resvanth",
    "roll no": "9278276",
    "age": 23,
    "email": "hello2@email.se"
}];
// can loop over the Array like this:

for (let i = 0; i < json.length; i++) {
    let obj = json[i];


    console.log(obj.name);
}

// for in loop

var person = { "name": "Nick", "roll no": "913426582", "age": 26, "address": "14, anna nagar 1st cross street, madurai" };
for (let x in person) {
    console.log(x + ": " + person[x])
}

// for of loop
let car = ["bmw", "audi", "toyota", "honda"]
for (index of car) {
    console.log(index)
}


// 2) create your own resume data in JSON format
var arr = { "name": "Gokul", "age": "23", "qualification": "BE Mech", "percentage": "76", "language known": "tamil,english", "project": "investigation of forced convective heat transfer & fluid analysis in staggered cavity", "activities": "5s workplace organization method" };
for (x in arr) {
    console.log(x + ":" + arr[x])
}
