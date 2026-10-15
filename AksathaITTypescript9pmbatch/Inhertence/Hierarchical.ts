class Parent 
{
    public Fparent():void 
    {
        console.log("Car");
    }
}

class Child1 extends Parent
{
    public Cchild1():void 
    {
        console.log("House");
    }
}

class Child2 extends Parent
{
    public Cchild2():void 
    {
        console.log("Bike");
    }
}

class Child3 extends Parent
{
    public Cchild3():void 
    {
        console.log("Flight");
    }
}

const ch1=new Child1();
ch1.Fparent();
ch1.Cchild1();

const ch2=new Child2();
ch2.Fparent();
ch2.Cchild2();

const ch3=new Child3();
ch3.Fparent();
ch3.Cchild3();