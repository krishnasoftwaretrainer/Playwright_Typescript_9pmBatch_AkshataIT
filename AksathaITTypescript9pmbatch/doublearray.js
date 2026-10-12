"use strict";
let a = [[1, 2, 3, 55], [4, 5, 6, 10], [7, 8, 9]]; //RxC:3x3=9
/*
console.log(a);

console.log(a[1][3]);

console.log(a.length); //rows length

console.log(a[1].length); //columns length
*/
/*
declare var process:any;
// for(let i=0;i<3;i++) //rows
for(let i=0;i<a.length;i++) //rows
{
    //for(let j=0;j<3;j++) //columns
    for(let j=0;j<a[i].length;j++) //columns
    {
        //console.log(a[i][j]); //00 01 02 10 11 12 20 21 22
        process.stdout.write(a[i][j]+" "); //00 01 02 10 11 12 20 21 22
    }
    process.stdout.write("\n"); //new line
} */
//push and pop methods
let values = [101, 102, 103, 104, 105];
values.push(106); //add 106 at the end of array
values.push(107);
values.pop(); //remove last element from array   
console.log(values);
