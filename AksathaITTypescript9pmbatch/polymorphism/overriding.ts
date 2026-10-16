class RBI //Parent
{
    public rateOfInterest():void
    {
        console.log("Rate of Interest in RBI is 6%");
    }
}

class SBI extends RBI
{
 public rateOfInterest():void
    {
        console.log("Rate of Interest in SBI is 7%");
    }
}

class HDFC extends RBI
{
 public rateOfInterest():void
    {
        console.log("Rate of Interest in HDFC is 8%");
    }
}

let sb=new SBI();
sb.rateOfInterest();

let hd=new HDFC();
hd.rateOfInterest();