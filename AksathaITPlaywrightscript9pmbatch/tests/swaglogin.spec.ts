import { test, expect } from '@playwright/test';

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

test('Swag InValid Login', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
await page.getByRole('textbox', { name: 'Username'}).fill('invalid_user');
await page.waitForTimeout(2000);
await page.getByRole('textbox', { name: 'Password'}).fill('invalid_sauce');
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Login'}).click();
await page.waitForTimeout(2000);
const errormsg=page.getByText('Epic sadface: Username and password do not match any user in this service');
await expect(errormsg).toBeVisible();
await page.waitForTimeout(2000);
});

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