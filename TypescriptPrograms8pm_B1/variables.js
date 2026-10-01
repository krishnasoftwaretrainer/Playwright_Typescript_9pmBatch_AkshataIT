"use strict";
//KeyWord variablename:datatype=Value;
//Global Scope 
/*
var num3:number;//Declaration
var num1:number;  //Declaration
num1=10;   //Initialization

 var num1:number=14;//Re-Declaration
num1=18; //Re-Initialization
var num2:number=20; //Declaration and Initialization

console.log("Value1:",num1);
console.log("Value2:",num2);
//console.log("Value3:",num3);
*/
//Function Scope
//var num2:number=88;  //Global
/*
function fun1()
{
    var num1:number;
    num1=22;
     var num1:number=24;//Re-Declaration
     var num2:number=98;
     num2=108;
    console.log("Value1:",num1);
    console.log("Value1:",num2);
}
fun1();
function fun2()
{
   var num1:number=44;//Re-Declaration
     console.log("Value1:",num1);
    
}
fun1();
fun2();  */
//var num1:number=54;
//num1=54;
//console.log("Value1:",num1);
//Block Scope
if (5 > 3) {
    var num1 = 66;
    console.log("Value1:", num1);
}
var num1 = 86;
console.log("Value1:", num1);
