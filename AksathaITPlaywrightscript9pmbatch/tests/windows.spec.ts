 import {test, expect,chromium} from '@playwright/test';

test('New Tabs', async ({context, page})=>
{
  await page.goto('https://demoqa.com/browser-windows');
  console.log(await page.title());
 await page.waitForTimeout(2000);

 const newPage1 = await context.newPage();

  await newPage1.goto('https://www.saucedemo.com/');
console.log(await newPage1.title());
  await newPage1.waitForTimeout(2000);
await newPage1.close();
 const newPage2 = await context.newPage();

  await newPage2.goto('https://www.saucedemo.com/');

  await newPage2.waitForTimeout(2000);
  await newPage2.close();
});

test('New Window', async ({context, page})=>
{
  await page.goto('https://demoqa.com/browser-windows');
  console.log(await page.title());
 await page.waitForTimeout(2000);

    const newPage1 = page.waitForEvent('popup'); //Open New Window
    await page.locator('#windowButton').click();
    const window1 = await newPage1;
    await window1.goto('https://www.saucedemo.com/');
    console.log(await window1.title());
    await window1.waitForTimeout(2000);
    //await window1.close();

    const newPage2 = page.waitForEvent('popup'); //Open New Window
     await page.locator('#windowButton').click();
    const window2 = await newPage2;
    await window2.goto('https://www.saucedemo.com/');
    console.log(await window2.title());
    await window2.waitForTimeout(2000);
    //await window2.close();
});

test.only('New Window application', async ({context, page})=>
{
  
    const browser1=await chromium.launch({headless:false});
    const page1 = await browser1.newPage(); 
    await page1.goto('https://demoqa.com/browser-windows');
    await browser1.close();
    await page1.waitForTimeout(2000);


    const browser2=await chromium.launch({headless:false});
    const page2 = await browser2.newPage(); 
    await page2.goto('https://www.saucedemo.com/');
     await browser2.close();
    await page2.waitForTimeout(2000);
   
});