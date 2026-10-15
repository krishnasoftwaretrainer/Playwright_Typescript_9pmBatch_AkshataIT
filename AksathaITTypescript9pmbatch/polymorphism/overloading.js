"use strict";
class caluculator {
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c;
        }
        else {
            return a + b;
        }
    }
}
let cal1 = new caluculator();
console.log(cal1.add(5, 6));
console.log(cal1.add(5, 6, 7));
