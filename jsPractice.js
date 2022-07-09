// // Testing the value of number
// let myNUM = (a,b) => a== 100 || b==100 || a+b== 100 ;
// console.log(myNUM(100,0));
// console.log(myNUM(80,20));
// console.log(myNUM(100,100));
// console.log(myNUM(3,70));
// // findind the extension of a file.
// const fileExt = (str) => str.slice(str.lastIndexOf('.'));
// console.log(fileExt("lolipop.pop"));
// // Joining names all at once
// let family = [
//     { fName : "Anubhab" , lName : "Karki"},
//     { fName : "Eva" , lName : "Rajauriya"},
//     { fName : "Pawan" , lName : "Rijal"},
//     { fName : "Ila" , lName : "Wagle"}
// ];
// function fullName(item){
//     let finalName = `${item.fName} ${item.lName}`;
//     return finalName;
// }
// let answer = family.map(fullName);
// console.log(answer);

// // Incrementing characters
// const incrementChars = (str) => str
//                                     .split('')
//                                     .map(char => String.fromCharCode(char.charCodeAt(0)+ 1))
//                                     .join(" ");
// console.log(incrementChars("Abcd"));

// // Program to get the current Date in format
const formattedDate = (date = new Date()) => {
    const day  = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`
}
console.log(formattedDate());

// // Program to get a new string 
// //const addNew = (str) => 
//   // str.indexOf("New!")===0 ? str : `New! ${str}`;
    
// function addNew(str){
//     if (str.indexOf("New!")=== 0){
//         return str;
    
//     }
//     return `New! ${str}`;
// }
// console.log(addNew("Place"));
// console.log(addNew("New! Lace"));

console.clear;

// Exercise 1
let number = (a,b) => a+b === 100 || a === 100 || b === 100 ;
console.log(number(10,10));

function answer(a,b){
    if (a==100 || b==100 || a+b==100){
        return true;
    }
    return false;
}
console.log(answer(100,60));

// Exercise 2
//const extFile = (str) => str.slice(str.lastIndexOf('.'));


function getExt(str){
    return str.slice(str.lastIndexOf("."));
}
console.log(getExt("human.html"));
console.log(getExt("human.jpg"));
// Exercise 3

// const INCREMENT_ALPHA = (str) => str
//                                     .split("")
//                                     .map(char => String.fromCharCode(char.charCodeAt(0) + 1 ))
//                                     .join("");

// console.log(INCREMENT_ALPHA("GDKKN"));

function incrementAlpha(str){
  let answer =  str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
   return answer;
}
console.log(incrementAlpha("gdkkn"))

// Exercise 4
let presentDate = (date = new Date()) =>{
    const days = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${days}/${month}/${year}`
}
console.log(presentDate());

// Exercise 5 
function renameString(str){
    if (str.indexOf("New!")=== 0){
        return str;
    }
    return `New! ${str}`;
}
console.log(renameString("New! Hello"));
console.log(renameString("Hello"));

const changeView = (str) => (str.indexOf("A")===0) ? str : `A${str}`;
console.log(changeView("Anubhab"));
console.log(changeView("eva"));


const remaining = (str) => str.slice(str.lastIndexOf('.'));
console.log(remaining("anubhab.eva"));
console.log(remaining("anubhab.jekos"));

const newDate = (date= new Date()) =>{
    const days = date.getDate();
    const time = date.getTime();
    return `Time : ${time} 
            Day : ${days}`;
}
console.log(newDate());


// Part 2 Exercise 1 Program to create new string
function inputString(str){
    
    if (str.length > 3){
    //   const firstString = str.slice(0,3);
    //   const secondString = str.slice(str.length-3, str.length);
    //   const newString = firstString+secondString;
    const newString = str.slice(0,3) + str.slice(-3);
      return newString;
      
    }
    return str;
    
}

console.log(inputString("Bhuhijkjfabik"));
 
const joinString = (str) => str.length > 3 ? str.slice(0,3) + str.slice(-3) : str ;
console.log(joinString("ABcd"));

// Exercise 2 Program to extract the first half of a string of even length

const givenString = (str) => {
    if (str.length % 2 == 0){
        return str.slice(0,(str.length/2));
    }
    return "Please give a even number string"
}
console.log(givenString("Hellfour"));

const smallString =(str) => (str.length % 2 == 0) ? str.slice(0,(str.length/2)) : "Give  a even string";
console.log(smallString("Threejelloe"));

// Exercise 3 Program to concatenate two strings excet first characters

const addedChar = (strA, strB) => strA.slice(0,3) + strB.slice(1);
console.log(addedChar("HHello", "lello"));
console.log(addedChar("pAnubhab","  Karki"));

//Exercise 4 Program to find the nearest to 100 
function nearestNum(a,b){
    if(a < 100 && b<100){
        if(a > b){
            return a;
        }
        else{
            return b;
        }
    }
    else if (a == 100 || b == 100){
    return "One of them is 100"
    }
    else if (a<b){
           return a;
    }
    else{
        return b;
    }
}
console.log(nearestNum(60,95));
console.log(nearestNum(60,100));
console.log(nearestNum(150,180));
console.log(nearestNum(100,95));
console.log(nearestNum(150,105));

const nearestTo100 = (x,y) => (100 - x) < (100 - y) ? x : y ;
console.log(nearestTo100(60,50));
console.log(nearestTo100(80,10));

//Exercise 5 Program to check a string containing 2-4 occurences of specified char
const enterString = (str,char) =>
                       str.split("").filter(aplhabet => aplhabet === char).length;
    console.log(enterString("salmonella", "l"));
    console.log(enterString("ssalalalaa", "a"));

const repeateMoreThan2 = (str,char) =>
      enterString(str,char) >= 2 && enterString(str,char)<= 4 ? true : false;
      console.log(repeateMoreThan2("sSSSalmonella","s"));
      console.log(repeateMoreThan2("salmonella", "l"));
      console.log(repeateMoreThan2("ssalalalaa", "a"));

// Extra Practice Check the age of given array
let ages = [15,18,19,22,25,33,38,40,45];
function myFunction(num) {
   return ages.filter(age =>age>=num);
 }
 console.log(myFunction(23));

 // Extra Practice Find the name by given ID
 let users = [{1 : "Anubhab"}, {2 : "Eva"}, {3 : "Ansyaa"}, {4 : "Mamu"}];
 console.log(users );
 function findName(id){
    switch (id){
        case 1 : return users[0]; 
        case 2 : return users[1];      
        case 3 : return users[2];
        case 4 : return users[3];
    }
}
    console.log(findName(2));

// Part 3 Exercise 1 Program to find the total even num from an array

const integers = (arr) =>
   arr.filter(num => num % 2 === 0).length;
   console.log(integers([1,2,3,4,5,6,7,8]));
   console.log(integers([1,2,3,5,7,9]));
   console.log(integers([1,2,8,10,50,33]));

// Exercise 2 Program to find the number of even values up to  given number
function makeArray(num){
       const formedArray = [];
    for(let i = 1; i<= num; i++){
      formedArray.push(i);
        
    }
    return formedArray;//.filter(even => even % 2 === 0).length;
}
console.log(integers(makeArray(10)));

// Exercise 3 Program to check if the array is in ascending order

const isAscending = (arr) =>{
    for(let i = 0; i<arr.length; i++){
        if(arr[i+1] > arr[i])
        return true;
    }
    return false;
}
console.log(isAscending([2,3,5,7,6]));
console.log(isAscending([2,3,4,5,6,7]));

//Exercise 4 Program to find the largest even num from integers
const passedNum = (arr) =>
  Math.max(...arr.filter(num => num% 2 ===0));


console.log(passedNum([6,7,85,56,3,8,75,80]));
console.log(passedNum([6,7,85,56,3,8,70000986678,80]));
console.log(Math.max(4,5,74,3,45,55));

let jpt = [32,4,35,52,5,23,24,5,32,400];
console.log(Math.max(...jpt));

// Exercise 5 Program to replace the first digit in a string
const sendString = (str) =>
   str.replace(/[0-9]/g , "$");
console.log(sendString("Anubha6b"))
console.log(sendString("8pi67y"));

const changeName = (str) =>
 str.replace(/anubhab/ig, "Bhubhik");
 console.log(changeName("My name is Anubhab, You are anuBHaB, Thank you anubhab"));

 //Part 4 Exercise 1 Program to find if the year is leap or not
 const whichYear = (year) => (year % 4 === 0);
 console.log(whichYear("2021"));
 console.log(whichYear(2016));

 // Exercise 2 Program to check if the object has the same property with another object
 const one = {Name : "anu" , Age : 23 , Sex : "male"};
 const two = {Name : "Eva" , Age : 20 , Sex : "Female", roll : 21};
 const three = {Name : "Ansyaa" ,  Sex : "Female", Gender : "male"};

 const checkObject = (a,b) => 
  Object.keys(a).every(key => b[key]);

console.log(checkObject(one,three));
console.log(checkObject(one,two));

// Exercise 3 Program to make the given string in 2D array formar
const singleArr = (str) => str.split("\n");
const twoD = (str) => str.split('\n').map(item => item.split(","));
const days = `sunday,sun
monday,mon
tuesday,tue
wednesday,wed`;
console.log(twoD(days));
console.log(singleArr(days));

//Random Number from 1-6
function randomNUM(min, max) {
    const RN = Math.random()* (max - min) + min;
    return Math.floor(RN);
}
console.log(randomNUM(3,10));
//or
const newRandom = Math.floor(Math.random()*(7-1) + 1);
console.log(newRandom);

// Exercise 4 Program to create  random hexadecimal color code
const randomHEX = '#' + Math.floor((Math.random() * 16 * 1000000)).toString(16);
console.log(randomHEX);
//or
const randomColor = () => Math.floor(Math.random() * 16).toString(16);
const RandomHexColor = () => "#" + Array.from({length : 6}).map(randomColor).join('');
console.log(RandomHexColor());

//Exercise 5 Program that return true if the provided function true for all elements in  a collection else false
const everyElements = (arr,fn) => {
    for(let i=0; i<arr.length; i++){
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
};
console.log(everyElements([4,5,6,7,78] , (x) => x > 3));
//or
console.log([4,52,35,2,6,4,63].every(x=> x >0)); 
console.log([4,52,35,2,6,4,63].every(x=> x >4));


//Part 5 Exercise 1 Program to return string in a alphabetical order
const aplhabeticalOrder = (str) => str.split('').sort().join('');
 //or sort((a,b) => a > b ? 1 : -1)
console.log(aplhabeticalOrder("Anubhab"));
console.log(aplhabeticalOrder("Eva karki"));

//Exercise 2 Program to count the vowel in a string
const letters = ['a','A', 'e','i', 'o', 'u']
const vowelStr = (str) => str.split('').filter(char => letters.indexOf(char) > -1 ).length;
console.log(vowelStr("Anubhab"))
console.log(vowelStr("aeiout"))

// Exercise 3 Program to convert an amount to coins
const coins = [50, 25, 10 , 5, 2, 1];
const countCoins = (amount) => {
    const answer = [];
    for(i = 0; i<coins.length ; i++){
        const totalCoins = Math.floor(amount / coins[i]);
        for(y = 0; y<totalCoins; y++){
          answer.push(coins[i]);
        }
        amount -= coins[i]*totalCoins;
    }
    return answer;
}
console.log(countCoins(150));
console.log(countCoins(10));
console.log(countCoins(36));
console.log(countCoins(742));

// Exercise 4 : Program to extract unique characters from a string
const getUniqueChars = (str) =>
  [...new Set(str.split(''))]
  console.log(getUniqueChars("the quick brown fox jumps over the lazy dog"));
  
  console.log(getUniqueChars("the quick brown fox jumps over the lazy dog").length)
  //or
const totalChars = (str) =>
  str.split('').filter((item, index, arr) =>
   arr.slice(index + 1).indexOf(item) === -1);
   console.log(totalChars("aacbbacb"));

// Exercise 5 : Program to find the first not repeated character
const notRepeat = (str) =>
     str.split('').filter((item, index, arr)=>
     arr.filter(arrItem => arrItem === item).length === 1
     );
     console.log(notRepeat("ANUBHAB"));