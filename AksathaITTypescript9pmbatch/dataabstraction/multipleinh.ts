interface Parent1
{
    Father1():void;
}

interface Parent2
{
     Father2():void;
}

class Child implements Parent1,Parent2
{

    Father1(): void {
        console.log('I am your Father1');
    }

    Father2(): void {
        console.log('I am your Father2');
    }
}

let child = new Child();
child.Father1();
child.Father2();