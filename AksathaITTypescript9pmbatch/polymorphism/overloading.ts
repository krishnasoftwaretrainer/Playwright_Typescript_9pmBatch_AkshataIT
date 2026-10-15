class caluculator
{
    public add(a:number,b:number):number;
    public add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number
    {
        if(c!==undefined)
        {
            return a+b+c;
        }
        else
        {
            return a+b;
        }
    }

}

let cal1=new caluculator();
console.log(cal1.add(5,6));
console.log(cal1.add(5,6,7));