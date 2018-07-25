var frontEnd = ['HTML', 'CSS', 'Javascript'];
var frontEndLangages = frontEnd;
const convertWeight = function (num, unit) {
    let conversion;
    if(isNaN(num)||(unit!=="pounds"&&unit!=="kilos")){
        return "Error: you have not entered correct values";
    }else if (unit === "kilos") {
        conversion = num * 2.20462;
    } else if(unit==="pounds"){
        conversion = num / 2.20462;
    }
    return conversion;
}
console.log(convertWeight(70, "kilos"));
const calcAge = function(birthYear){
    let d = new Date;
    let ageOne = d.getFullYear()-birthYear;
    let ageTwo = ageOne-1;
    return "Your age is "+ageOne+" or "+ageTwo ;
}
const isPrime = function(num){
    if(num===1) return false;
    else if(num===2||num===3) return true; 
    for(let i = 2; i<=num/2; i++){
        if(num%i===0) return false;
    }
    return true;
}
const arrAverage = function(arr){
    let sum=0;
    for(let num of arr){
        sum+=num;
    }
    return sum/arr.length;
}
const isInArr = function (arr, num){
    for(let a of arr){
        if(a===num) return true;
    }
    return false;
}
//logs all the numbers that are less then the num parameter in the arr parameter
const allLessArr=function(arr , num){
   for(let a of arr){
       if(a<num) console.log(a);
   } 
}