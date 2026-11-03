import { test, expect } from '@playwright/test';


test('Automatic Scroll', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Submit'}).click();
await page.waitForTimeout(2000);
});

test('Focus on Element', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Submit'}).focus();
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Submit'}).click();
await page.waitForTimeout(2000);
});

test('Scroll Page Manually', async ({ page }) => {
    //Vertical[Up/Down] and Horizontal Scroll[Left/Right]

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
await page.mouse.wheel(0, 1000); //Scroll Down
await page.waitForTimeout(2000);
await page.mouse.wheel(0, -1000); //Scroll Up
await page.waitForTimeout(2000);
await page.mouse.wheel(1000, 0); //Scroll Right
await page.waitForTimeout(2000);
await page.mouse.wheel(-1000, 0); //Scroll Left
await page.waitForTimeout(2000);
await page.waitForTimeout(2000);
});

test.only('Scroll Page Specific Element', async ({ page }) => {
    //Vertical[Up/Down] and Horizontal Scroll[Left/Right]

await page.goto('https://demo.automationtesting.in/Register.htm');
await page.waitForTimeout(2000);
const submitButton = page.getByRole('button', { name: 'Submi' });
await submitButton.scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
});

test('Scroll Page using Keyboard', async ({ page }) => {
    //Vertical[Up/Down] and Horizontal Scroll[Left/Right]

await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);
await page.keyboard.press('PageDown'); //Scroll Down
await page.waitForTimeout(2000);
await page.keyboard.press('PageUp'); //Scroll Up
await page.waitForTimeout(2000);
await page.keyboard.press('ArrowRight'); //Scroll Right
await page.waitForTimeout(2000);
await page.keyboard.press('ArrowLeft'); //Scroll Left
await page.waitForTimeout(2000);
await page.keyboard.press('ArrowDown'); //Scroll Down
await page.waitForTimeout(2000);
await page.keyboard.press('ArrowUp'); //Scroll Up
await page.waitForTimeout(2000);
await page.keyboard.press('End'); //Scroll to Bottom
await page.waitForTimeout(2000);
await page.keyboard.press('Home'); //Scroll to Top
await page.waitForTimeout(2000);
});
