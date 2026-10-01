//Global Scope:let 

const pie:number=3.14;
//pie=2.14; //Re-Initialization of const variable is not allowed in the same scope
//const pie:number=3.14;
console.log(pie); 

//Function Scope:let

function fun2()
{
    const num5:number=22;
    //num2=88;
   // const num2:number=22;
    console.log(num5);
    //const pie:number=3.14;
    //pie=4.14;
}
fun2();

const num5:number=22;