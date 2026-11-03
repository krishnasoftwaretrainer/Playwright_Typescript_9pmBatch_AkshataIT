import { test, expect } from '@playwright/test';

test('Alert with OK', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Alerts.html');
   await page.pause();

    const alertbutton=page.locator('//button[@onclick="alertbox()"]');
    
await page.waitForTimeout(2000);
    
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
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
        await dialog.accept();
       // await page.waitForTimeout(2000);
    });

await alertbutton.click();

}); 