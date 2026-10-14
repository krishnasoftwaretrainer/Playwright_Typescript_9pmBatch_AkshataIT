class constructor1 
{
    /*
    constructor() //Without Parameter
    {
        let a:number=10,b:number=20;
        let sum:number=a+b;
        console.log(`Sum:${sum}`);
    }

    addition():void //Without Parameter and Without Returntype
    {
        let a:number=10,b:number=20;
        let sub:number=a-b;
        console.log(`Sub:${sub}`);
    } */

        constructor(a:number,b:number) //With Parameter
    {
        let sum:number=a+b;
        console.log(`Sum:${sum}`);
    }

    addition(a:number,b:number):void //Without Parameter and Without Returntype
    {
        let sub:number=a-b;
        console.log(`Sub:${sub}`);
    }

}

let cons1=new constructor1(22,33);
cons1.addition(22,33);