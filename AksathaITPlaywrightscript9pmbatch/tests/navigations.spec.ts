import { test, expect } from '@playwright/test';


test('Browser Navigations', async ({ page }) => {
    await page.pause();

await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
await page.goto('https://www.facebook.com/');
await page.waitForTimeout(2000);
await page.goBack();
await page.waitForTimeout(2000);
await page.goBack();
await page.waitForTimeout(2000);

await page.goForward();
await page.waitForTimeout(2000);
await page.goForward();
await page.waitForTimeout(2000);
await page.reload();
await page.waitForTimeout(2000);

});