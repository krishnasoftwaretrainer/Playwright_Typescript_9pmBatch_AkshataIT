"use strict";
//Arithmetic Operators
let num1 = 20.5;
let num2 = 10.3;
/*
console.log(num1+num2); //30
console.log(num1-num2);//10
console.log(num1*num2);//200
console.log(num1/num2);//2
console.log(num1%num2);//0
*/
num1 = 22;
num2 = 11;
//Relational Operators or Comparison Operators
/*
console.log(num1<num2); //false 22<11
console.log(num1>num2); //true 22>11
console.log(num1<=num2); //false 22<=11
console.log(num1>=num2); //true
console.log(num1==num2); //false
console.log(num1!=num2); //true
*/
/*
let value1:boolean=false;
let value2:boolean=false;

//Logical Operators

console.log(value1 && value2); //true  false false false
console.log(value1 || value2); //true true true false

console.log(!(value1 && value2)); //true
console.log(!(value1 || value2)); //true
console.log(!(value1)); //true
*/
/*
//Relational Operators and Logical Operators
num1=22;
num2=11;
let num3:number=40,num4:number=30;

console.log(num1>=num2 && num3<=num4);  //22>=11:true 30<=40:true: true false
console.log(num1>=num2 || num3<=num4);  //22>=11:true 30<=40:true: true true*/
//Assignment Operators
/*
let a:number=10,b:number=10,c:number=10,d:number=10;

console.log(a+=5); //a=a+5; a=10+5;a=15
console.log(b-=5); //b=b-5; b=10-5;b=5
console.log(c*=5); //c=c*5; c=10*5;c=50
console.log(d/=5); //d=d/5; d=10/5;d=2
*/
/*
let a:number=10;
console.log(a+=5);
console.log(a-=5);
console.log(a*=5);
console.log(a/=5);
*/
//Increment and Decrement Operators[Unary Operators]
/*
let a:number=10,b:number=10,c:number=10,d:number=10;

console.log(++a); //Prints 11, Update a=11
console.log('update:',a); //update: 11

console.log('---------');
console.log(b++); //Prints 10, Update b=11
console.log('update:',b); //update: 11
console.log('---------');
console.log(--c); //Prints 9, Update c=9
console.log('update:',c); //update: 9
console.log('---------');
console.log(d--); //Prints 10, Update d=9
console.log('update:',d); //update: 9
*/
//Ternary Operator:Elgible to apply for voting or not:age>=18 
let age = 22;
// let result:boolean =age>=18?true:false;  //20>=18
let result = age >= 18 ? 'Eligible' : 'Not Eligible'; //20>=18
console.log('Result:', result);
