"use strict";
class RBI //Parent
 {
    rateOfInterest() {
        console.log("Rate of Interest in RBI is 6%");
    }
}
class SBI extends RBI {
    rateOfInterest() {
        console.log("Rate of Interest in SBI is 7%");
    }
}
class HDFC extends RBI {
    rateOfInterest() {
        console.log("Rate of Interest in HDFC is 8%");
    }
}
let sb = new SBI();
sb.rateOfInterest();
let hd = new HDFC();
hd.rateOfInterest();
