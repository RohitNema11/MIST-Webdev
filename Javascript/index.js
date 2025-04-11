console.log("Hello world");
// semi colon optional but better to use

// in-line comment
/* multi
line
comment*/

//Datatypes
// undefined, null, boolean, string, symbol, number, object

//Variable
var name="Rohit"
name=9
let max="verstappen"
const pi=3.14

var a;
var b=5;
console.log(a)
a=b;
console.log(a)

// String
// Strings are immutable
var str='I am a "double quoted" string inside "double quotes"'
console.log(str)

//Escape sequences
/*
CODE OUTPUT
\'   single quote
\"   double quotes
\\   backslash 
\n   newline
\t   tab
\b   backspace
\f   form feed
*/

var Str="Start"
Str += " first"
console.log(Str)

var firstName="Peteri"
len = firstName.length;
console.log(len)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";
    result+="The "+ myAdjective+ " "+ myNoun + " "+ myVerb + " to the store " + myAdverb;
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));

//Arrays
var Array=["Rohit", 22]
var Array1=[["Jack",23],["Mike",24]]
console.log(Array)
console.log(Array1)

var myArray=[[1,2,3],[4,5,6],[[7,8,9],10,11]]
var myData=myArray[2][0]
console.log(myData)

myArray.push(12,13)
console.log(myArray)

var removedFrommyArray = myArray.pop()
console.log(myArray)
console.log(removedFrommyArray)

var removedfrontFrommyArray = myArray.shift()
console.log(myArray)
console.log(removedfrontFrommyArray)
myArray.unshift([11,12,13])
console.log(myArray)

// if a variable is defined without a var keyword, it has a global scope
// if name of global and local variable is the same then, precedence of the local variable is greater than that of global variable 

 function nextInLine(arr,num){
    arr.push(num);
    return arr.shift();
 }
 var testArr=[1,2,3,4,5]
 console.log("Before: "+JSON.stringify(testArr))
 console.log(nextInLine(testArr,6))
 console.log("After: "+JSON.stringify(testArr))

 // strict equality comparison ===
 // 3=='3' is True (There is type conversion)
 // 3==='3' is False (No type conversion)

 // strict inequality comparison !==

 //Javascript objects
 var object={
    "name":"Ben",
    "legs":2,
    "tails":3,
    "with space":5
 }
 var objectCopy = JSON.parse(JSON.stringify(object));
 console.log(object)
 var Name=object.name;
 console.log(Name)
 var space=object["with space"]
 console.log(space)
 object.legs=7
 console.log(object)
 object.hands=2
 console.log(object)
 object['Friends']="Lot"
 console.log(object)
 delete object.legs
 console.log(object)
 
 function checkObj(checkProp){
   if(object.hasOwnProperty(checkProp)){
      return object[checkProp]
   }
   else {
      return "Not found"
   }
 }
 console.log(checkObj("name"))

 console.log(objectCopy)

 //We can store objects inside array
//To access the properties of nested objects, chain together the dot or bracket notation

//2:05:00-2:10:00 : Record

//Random numbers
var randomFraction=Math.random()
console.log(randomFraction)
// num lies between 0 and 1 (could be 0 but not 1)

var randomWhole=Math.floor(Math.random()*10)
console.log(randomWhole)

function randomRange(Min,Max){
   return Math.floor(Math.random() * (Max-Min+1)) + Min;
}
console.log(randomRange(1,9))

//parse
string1="78"
string2=parseInt(string1)
console.log(string2)

function convertToInteger(str){
   return console.log(parseInt(str,2))
}
convertToInteger("1000")