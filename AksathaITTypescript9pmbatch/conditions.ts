//Sequentional Flow Execution
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log('----------');
console.log(3);
console.log(5);
console.log(4);
console.log(2);
console.log(1);
*/

//Student Result
//Simple if Statement 
/*
let obtainedMarks:number=55;
    obtainedMarks=25;

if(obtainedMarks>=35)  //55>=35:True  25>=35:False
{
    console.log("Pass"); //TBS 

} */

    //if else [Ternary Operator]
/*
    let obtainedMarks:number=55;
    obtainedMarks=45;

if(obtainedMarks>=35)  //55>=35:True  25>=35:False
{
    console.log("Pass/Promoted"); //TBS 

}
else
{
    console.log("Fail"); //FBS 

} */

    //Eligible to apply Vote or Note
/*
    let age:number=25;

    if(age>=18 && age<=80)
    {
        console.log("Eligible to apply for Vote"); //TBS
    }
    else
    {
        console.log("Not Eligible to apply for Vote because your age is <18 or >80"); //FBS
    }
        */

    //elese-if or ladder-if Statement
/*
    let obtainedMarks:number=-10;
    
    if(obtainedMarks>=85 && obtainedMarks<=100) //55>=85 && 55<=100:False
    {
        console.log("A Grade"); //TBS 
    }
    else if(obtainedMarks>=70 && obtainedMarks<=84) //55>=70 && 55<85:False
    {
        console.log("B Grade"); //TBS 
    }
    else if(obtainedMarks>=55 && obtainedMarks<70) //55>=55 && 55<70:True
    {
        console.log("C Grade"); //TBS 
    }
    else if(obtainedMarks>=35 && obtainedMarks<55)
    {
        console.log("D Grade"); //TBS 
    }
    else if(obtainedMarks>=0 && obtainedMarks<35)
    {
        console.log("Fail"); //TBS 
    }
    else
    {
        console.log("Invalid Marks"); //FBS
    }  */

        //Nested if Condition 
        //Eligible to donate Blood 

        let age:number=15;
        
        if(age>=18)  //true 22>=18T T 
        {
            let weight:number=45;

            if(weight>=50) //true 55>=50T F
            {
                    console.log('Eligible to donate the BLOOD')
            }
            else //Inner Condition else block 
            {
                console.log('Your weight is lessthan 50')
            }
        }
        else //Outer condition else block 
        {
            console.log('Your age is lessthan 18 years')
        }