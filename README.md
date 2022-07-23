# day03

1. for a given JSON iterate over all for loops   
var person = {
   "name": "Nick",
   "name1": "Jonas",
   age: 26
}; 
for (let x in person) {
   console.log(x + ": "+ person[x])
}

2. create your own resume in JSON format
var arr={
"name":"Gokul",
"age":"23",
"qualification":"BE Mech",
"percentage":"76",
"language known":"tamil,english",
"project":"investigation of forced convective heat transfer & fluid analysis in staggered cavity",
"activities":"5s workplace organization method"
};
console.log(arr);

3. read about the difference between window, screen & document in javascript
Window : It is the main JavaScript object root.It is the global object in a browser.It can also be treated as the root of the document object model.
screen : It is a small information object about physical screen dimensions.
document : It is the main object of the potentially visible Document Object Model/DOM. 
