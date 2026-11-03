import { test, expect } from '@playwright/test';

/*
Visible Page Screenshots
Full Page Screenshots
Specific Element Screenshots
Screenshot with time stamp
*/
test('Visible Page Screenshots', async ({ page }) => {
    //await page.pause();

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
await page.screenshot({ path: 'tests/screenshots/VisiblePageScreenshot1.png'});
await page.waitForTimeout(2000);
});

test('Full Page Screenshots', async ({ page }) => {
    //await page.pause();

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
await page.screenshot({ path: 'tests/screenshots/FullPageScreenshot1.png', fullPage: true });
await page.waitForTimeout(2000);
});

test('Specific Element Screenshots', async ({ page }) => {
    //await page.pause();

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
const element = page.getByRole('button', { name: 'Submit' });
await element.screenshot({ path: 'tests/screenshots/SpecificElementScreenshot1.png' });
await page.waitForTimeout(2000);
});

test('Timestamp Screenshots', async ({ page }) => {
    //await page.pause();

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
const timestamp = Date.now();
const element = page.getByRole('button', { name: 'Submit' });
await element.screenshot({ path: `tests/screenshots/SpecificElementScreenshot${timestamp}.png` });
await page.waitForTimeout(2000);
await element.screenshot({ path: `tests/screenshots/SpecificElementScreenshot${timestamp + 1}.png` });
await page.waitForTimeout(2000);
});


