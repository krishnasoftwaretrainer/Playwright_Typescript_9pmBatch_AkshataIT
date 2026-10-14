"use strict";
// 1.Without Parameters and Without Returntype
//  public addition():void
class userdefinemethods {
    static addition() {
        let a = 10, b = 20;
        let sum = a + b;
        console.log(`Sum:${sum}`);
    }
    //  2.Without Parameters and With Returntype
    //  public addition():number
    //  return value;
    subtraction() {
        let a = 20, b = 10;
        let sub = a - b;
        return sub;
    }
    //  3.With Parameters and Without Returntype
    //  public addition(let a:number,let b:number):void
    multiplication(a, b) {
        let mul = a * b;
        console.log(`Mul::${mul}`);
    }
    //  4.With Parameters and With Returntype
    // public addition(let a:number,let b:number):number
    // return value;
    division(a, b) {
        let div = a / b;
        return div;
    }
}
const types = new userdefinemethods();
//types.addition();
userdefinemethods.addition();
console.log(`Sub:${types.subtraction()}`);
types.multiplication(10, 20);
