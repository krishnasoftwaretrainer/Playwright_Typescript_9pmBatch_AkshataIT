export class calculator {
    addition() {
        let a = 10, b = 20;
        let sum = a + b;
        console.log(`Sum:${sum}`);
    }
    //      private subtraction():void //Method-2
    //     {
    //         let a:number=20,b:number=10;
    //         let sub:number=a-b;
    //         console.log(`Sub:${sub}`);
    //     }
    // }
    subtraction() {
        let a = 20, b = 10;
        let sub = a - b;
        console.log(`Sub:${sub}`);
    }
    useSubtraction() {
        this.subtraction();
    }
}
// //create Object 
// let cal=new calculator();
// cal.addition();
// cal.subtraction();
export class calculator1 {
    //+ - * 
    multiplication() {
        let a = 10, b = 20;
        let mul = a * b;
        console.log(`Mul::${mul}`);
    }
}
// let cal=new calculator();
// cal.addition();
// //cal.subtraction();
// cal.useSubtraction();
// let cal1=new calculator1();
// cal1.multiplication();
