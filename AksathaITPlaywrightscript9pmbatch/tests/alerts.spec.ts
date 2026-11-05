import { test, expect } from '@playwright/test';

test('Alert with OK', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Alerts.html');
   await page.pause();

    const alertbutton=page.locator('//button[@onclick="alertbox()"]');
    
await page.waitForTimeout(2000);
    
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();  //OK 
       // await page.waitForTimeout(2000);
    });

await alertbutton.click();

}); 

test('Alert with OK or Cancel', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Alerts.html');
   await page.pause();

    const alertbutton=page.locator('//button[@onclick="alertbox()"]');
    
await page.waitForTimeout(2000);
    
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        //await dialog.accept(); //OK
        await dialog.dismiss(); //Cancel 
       // await page.waitForTimeout(2000);
    });

await alertbutton.click();

}); 

test.only('Prompt Alert', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Alerts.html');
   //await page.pause();

    const alertwithtextbox=page.locator('//a[@href="#Textbox"]');
    const thepromptbox=page.locator('//button[@onclick="promptbox()"]');
//await page.waitForTimeout(2000);
    
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept('Krishna');
        //await dialog.accept();
       // await page.waitForTimeout(2000);
    });

await alertwithtextbox.click();
await thepromptbox.click();

const resulttext=await page.locator('#demo1').textContent();
console.log(resulttext);


}); 