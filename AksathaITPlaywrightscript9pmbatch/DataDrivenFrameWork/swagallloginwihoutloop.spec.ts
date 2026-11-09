import { test, expect } from '@playwright/test';
import loginData from '../DataDrivenFrameWork/swagalltestdata.json';

test('Valid UserName and Valid Password - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.validLogin.username);
  await page.locator('[data-test="password"]').fill(loginData.validLogin.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});


test('Valid USerName and Invalid password - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.invalidPassword.username);
  await page.locator('[data-test="password"]').fill(loginData.invalidPassword.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});


test('Invalid username and Valid Password- SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.invalidUsername.username);
  await page.locator('[data-test="password"]').fill(loginData.invalidUsername.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});


test('Blank username and Valid Password- SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.emptyUsername.username);
  await page.locator('[data-test="password"]').fill(loginData.emptyUsername.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username is required');
});


test('Valid username and Blank password - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.emptyPassword.username);
  await page.locator('[data-test="password"]').fill(loginData.emptyPassword.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Password is required');
});

test('Blank username and Blank password - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill(loginData.emptyUsernamePassword.username);
  await page.locator('[data-test="password"]').fill(loginData.emptyUsernamePassword.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username is required');
});