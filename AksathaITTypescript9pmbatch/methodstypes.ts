// 1.Without Parameters and Without Returntype
//  public addition():void
 
class userdefinemethods
{
    public static addition():void  //Method-1
    {
        let a:number=10,b:number=20;
        let sum:number=a+b;
        console.log(`Sum:${sum}`);
    }

//  2.Without Parameters and With Returntype
//  public addition():number
//  return value;
 
public subtraction():number //Method-2
{
    let a:number=20,b:number=10;
    let sub:number=a-b;
    return sub;
}
//  3.With Parameters and Without Returntype
//  public addition(let a:number,let b:number):void
 
public multiplication(a:number,b:number):void  //Method-3
{
    let mul:number=a*b;
    console.log(`Mul::${mul}`);
}


//  4.With Parameters and With Returntype
// public addition(let a:number,let b:number):number
// return value;

public division(a:number,b:number):number //Method-4
{
    let div:number=a/b;
    return div;
}
}

const types=new userdefinemethods();
//types.addition();
userdefinemethods.addition();
console.log(`Sub:${types.subtraction()}`);
types.multiplication(10,20);
console.log(`Div:${types.division(20,10)}`);