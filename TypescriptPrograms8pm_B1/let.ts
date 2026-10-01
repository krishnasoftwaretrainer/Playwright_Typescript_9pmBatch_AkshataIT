//Global Scope:let 

// let num8:number=22;
// num8=33;  //Re-Initialization of let variable is allowed in the same scope
// //let num8:number=22; //Re-Declaration of let variable is not allowed in the same scope
// console.log(num8);  

//Function Scope:let
/*
function fun1()
{
    let num2:number=22;
    num2=33;  //Re-Initialization of let variable is allowed in the same scope
   //let num2:number=22;
    console.log(num2);
    //let num8:number=22;
    num8=101;

} */
/*
fun1();

let num2:number=22;
num2=55;
console.log(num2);  */

//Block Scope

if(true)
{
    let num6:number=22;
    num6=33;
    //let num6:number=22;
    console.log(num6);
    
}

//let num6:number=22;
//num6=43;
console.log(num6);