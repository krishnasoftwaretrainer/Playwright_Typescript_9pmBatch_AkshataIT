import { test, expect } from '@playwright/test';

//getByRole Locator
test('Swag Valid Login', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
await page.waitForTimeout(2000);
await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce');
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Login'}).click();
await page.waitForTimeout(2000);
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); //Excepted
await page.waitForTimeout(2000);
});

//getByLable Locator
test('Swag InValid Login', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
await page.getByLabel('Username').fill('invalid_username');
await page.waitForTimeout(2000);
await page.getByLabel('Password').fill('invalid_sauce');
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Login'}).click();
await page.waitForTimeout(2000);
const errormsg=page.getByText('Epic sadface: Username and password do not match any user in this service');
await expect(errormsg).toBeVisible();
await page.waitForTimeout(2000);
});

//getByPlaceholder and getByText Locator
test('Swag Blank Login', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
await page.getByPlaceholder('Username').fill('');
await page.waitForTimeout(2000);
await page.getByPlaceholder('Password').fill('');
await page.waitForTimeout(2000);
await page.getByText('Login').click();
await page.waitForTimeout(2000);
const errormsg=page.getByText('Epic sadface: Username is required');
await expect(errormsg).toBeVisible();
await page.waitForTimeout(2000);
});

//getByAltText Locator
test('AltText Locator', async ({ page }) => {
await page.goto('https://www.bing.com/');
await page.waitForTimeout(2000);
await page.getByAltText('© News18').first().click();
await page.waitForTimeout(2000);

});

//getByTitle Locator
test('Title Locator', async ({ page }) => {
await page.goto('https://jqueryui.com/');
await page.waitForTimeout(2000);
const title = page.getByTitle('jQuery UI').first();
await expect(title).toBeVisible();
await page.waitForTimeout(2000);
await title.click();
await page.waitForTimeout(2000);
});

//CSS Selector Locator
test('CSS Selector Locator', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
// await page.locator('#user-name').fill('secret_sauce'); //ID
//await page.locator('.input_error.form_input').first().fill('secret_sauce'); //classname
//await page.locator('.input_error').first().fill('secret_sauce'); //classname
//await page.locator('input').first().fill('secret_sauce'); //tagname
await page.locator('[aria-label="Username"]').first().fill('secret_sauce'); //Attribute Value
await page.waitForTimeout(2000);
});

//XPath Locator
test.only('XPath Locator', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
//await page.locator('//input[@type="submit"]').click();
// const ttiletext=await page.locator('//div[text()="Swag Labs"]').textContent();
const ttiletext=await page.locator('//div[text()="Swag Labs"]').innerText();
console.log(ttiletext);
await expect(ttiletext).toBe('Swag Labs');
await page.waitForTimeout(2000);
});