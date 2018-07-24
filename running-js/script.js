//day 2 lesson 3
alert("Make sure you bring sunscreen!");
//day 2 lesson 4
let age = prompt("What is your age?");
let gender = prompt ("What is your Gender");
if(age<18){
    alert("No drinks for you");
} else if(age > 18 && gender==="Male") {
    alert("What would you like to drink?");
}else if(age > 18 && gender==="Female"){
    alert("Get your drinks for free!");
}
citizenship = prompt ("What is your Citizenship");
if(citizenship==="Israeli"){
    alert("you can pass");
} else {
    alert ('You may not pass');
}
//day 2 lesson 5
for(let i = 0 ; i < 20 ; i++){
    let fizzString = "";
    if (i % 5 === 0 ) {
        fizzString+="Fizz";
    }
    if (i % 3 === 0){
        fizzString+="Buzz";
    }
    if(!fizzString){
        console.log(i);
    }
    else{
        console.log(fizzString);
    }

}
let restaurants = ["La Murray", "Papagaio", "Entricote", "Anna Ticho", "Lechem Basar"];
for (let restaurant of restaurants){
    console.log(restaurant);
}
let sum = 0;
let numArray = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
for(number of numArray){ 
    sum+=number
}
let colors = "";
const myColor = ["Red", "Green", "White", "Black"];
for(color of myColor){
    if(colors){
        colors=colors+" + " + color;
    } else {
        colors+=color;
    }
}
console.log(colors);

let evenNum = prompt("Enter a number:");
let evenNumArray = evenNum.split("");
let returnArray = [];
for(let i = 0; i < evenNumArray.length; i++){
    returnArray.push(evenNumArray[i])
    if(evenNumArray[i]%2===0&&evenNumArray[i+1]%2===0){
        returnArray.push("-");
    }
}
console.log(returnArray.join(''));
