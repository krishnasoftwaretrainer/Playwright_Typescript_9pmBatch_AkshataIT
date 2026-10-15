"use strict";
class Parent {
    Father() {
        console.log("I am Father");
        console.log("Car");
    }
}
class Child extends Parent {
    Son() {
        console.log("I am Son");
        console.log("Bike");
    }
}
// let f=new Parent();
// f.Father();
let c = new Child();
c.Father();
c.Son();
