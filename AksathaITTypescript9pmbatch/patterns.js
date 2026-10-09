"use strict";
/*
declare var process: any;
for(let i:number=1;i<=10;i++)  //rows
{
    for(let j:number=1;j<=5;j++) //columns
    {
       // console.log(j);
       //process.stdout.write(j + "\t");
       process.stdout.write('****' + "\t");
    }
    process.stdout.write("\n");
}  */
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 */
for (let i = 1; i <= 10; i++) //rows
 {
    for (let j = 1; j <= i; j++) //columns
     {
        // console.log(j);
        process.stdout.write(j + "\t");
        //process.stdout.write('****' + "\t");
    }
    process.stdout.write("\n");
}
