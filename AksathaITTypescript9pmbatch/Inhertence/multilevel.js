"use strict";
class GrandParent {
    GParent() {
        console.log("Cycyle");
    }
}
class Parent extends GrandParent {
    Fparent() {
        console.log("Bike");
    }
}
class Child extends Parent {
    Cchild() {
        console.log("Car");
    }
}
let krishna = new Child();
krishna.Fparent();
krishna.Cchild();
krishna.GParent();
