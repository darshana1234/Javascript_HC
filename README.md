# Javascript_HC

https://tc39.es
--Ecmascript official documentatn

number =>2 to pwer 53
bigInt=>used in stocks,trading,Fb
boolean=>true/false
null=>standalone value
undefined=>
symbol=>unique -->

object
null is a object

//POSTFIX - Value increments but doesnt update
let x = 3;
const y = x++;
x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
x2 is 4n; y2 is 3n

//PREFIX -Value increments and updates too

let x = 3;
const y = ++x;
x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
x2 is 4n; y2 is 4n

math.random will have values between 0 and 1

unshift adds the number to first position in the array
shift removes the number from first position in the array

slice returns a piece of the array but it doesn’t affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.

When you use each one is up to you. If you have to alter the content of the array, splice is the way to go, but if you just want to obtain a subarray, slice should be your choice.

Whenever a object is made through constructor its singleton
