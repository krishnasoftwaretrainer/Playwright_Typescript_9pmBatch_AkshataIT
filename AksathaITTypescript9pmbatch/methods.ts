class calculator
{
    public addition():void  //Method-1
    {
        let a:number=10,b:number=20;
        let sum:number=a+b;
        console.log(`Sum:${sum}`);
    }

     public subtraction():void //Method-2
    {
        let a:number=20,b:number=10;
        let sub:number=a-b;
        console.log(`Sub:${sub}`);
    }
}

// //create Object 
// let cal=new calculator();
// cal.addition();
// cal.subtraction();

class calculator1
{
    //+ - * 
    public multiplication():void  //Method-1
    {
        let a:number=10,b:number=20;
        let mul:number=a*b;
        console.log(`Mul::${mul}`);
    }
}

let cal=new calculator();
cal.addition();
cal.subtraction();

let cal1=new calculator1();
cal1.multiplication();