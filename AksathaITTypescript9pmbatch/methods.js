"use strict";
class calculator {
    addition() {
        let a = 10, b = 20;
        let sum = a + b;
        console.log(`Sum:${sum}`);
    }
    subtraction() {
        let a = 20, b = 10;
        let sub = a - b;
        console.log(`Sub:${sub}`);
    }
}
// //create Object 
// let cal=new calculator();
// cal.addition();
// cal.subtraction();
class calculator1 {
    //+ - * 
    multiplication() {
        let a = 10, b = 20;
        let mul = a * b;
        console.log(`Mul::${mul}`);
    }
}
let cal = new calculator();
cal.addition();
cal.subtraction();
let cal1 = new calculator1();
cal1.multiplication();
