interface RBI  //Parent:Interface Class
{
    rateofIntrest(): void;
}

class  SBI implements RBI //Child:Normal class
{
    rateofIntrest(): void {
        console.log('SBI Rate of Intrest:6%');
    }
}

let sbi = new SBI();
sbi.rateofIntrest();