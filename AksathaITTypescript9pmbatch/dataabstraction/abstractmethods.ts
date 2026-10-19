/* abstract class Parent  //Normal Class 
{
    //Front End
    public abstract Child():void; //Un-Imlemented Method/abstract method  
 
    public Child1():void
    {
        //Normal Method
    }
    
}  */

    //RBI:5% SBI:6% HDFC:7%  RBI:
    
   abstract class RBI //Parent:Normal Class/abstract Class
    {
        public abstract rateofIntrest():void; //Normal Methods/abstract method                 
        
        public BankTimings() //Implemented Method
        {
            console.log('Bank Time:9am to 5pm');
        }
    }

    class SBI extends RBI
    {
public  rateofIntrest()
{
 console.log('SBI Rate of Intrest:6%');
}
    }

    let sbi=new SBI();
    sbi.rateofIntrest();
    sbi.BankTimings();

    class HDFC extends RBI
    {
public  rateofIntrest()
{
 console.log('HDFC Rate of Intrest:7%');
}
    }

    let hdfc=new HDFC();
    hdfc.rateofIntrest();
    hdfc.BankTimings();