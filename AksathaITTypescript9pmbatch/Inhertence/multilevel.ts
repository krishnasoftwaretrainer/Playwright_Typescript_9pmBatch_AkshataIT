class GrandParent
{
public GParent()
{
    console.log("Cycyle")
}
}

class Parent extends GrandParent
{
    public Fparent():void 
    {
        console.log("Bike")
    }
}

class Child extends Parent
{
    public Cchild():void 
    {
        console.log("Car");
    }
}

let child=new Child();

child.Fparent();
child.Cchild();
child.GParent();