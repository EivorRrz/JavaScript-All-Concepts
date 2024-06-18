1//arithmetic>>>>
let sum = 5 + 3; // 8
let difference = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.666...
let remainder = 5 % 3; // 2

2//Assignment Operators
let x = 5;

//assignmenT Operator
let x1 = 5;
x1 += 3; // x is now 8

//similary with all the operators we can perform the assign Operator


//3
//Comparison Operators
5 == '5'; // true (type coercion)
5 === '5'; // false (no type coercion)
5 != '5'; // false (type coercion)
5 !== '5'; // true (no type coercion)
5 > 3; // true
5 >= 3; // true
5 < 3; // false
5 <= 3; // false


//4
// /Logical Operators
//both to make true
//AND
true && false; // false
true && true; // true

//OR( ONE TO MAKE TRUE)
true || false; // true
false || false; // false

//LOGICAL nOT
!true; // false
!false; // true

//5
//Ternary Operator
let age =18;
let canVote = (age>=18)? "yes":"no";

let bike =200+"c";
let bikeDO =(180>bike)? "yes" :"no"

//6. Type Operators

let amitStr = "amit"
typeof(amitStr)

//instanceOf
//as here data is the instance of the data so true
let date = new Date();
date instanceof Date; // true
