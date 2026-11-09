import { test, expect } from '@playwright/test';
import swagloginData from '../DataDrivenFrameWork/singlevalidtestdata.json';

test('Valid login - SauceDemo', async ({ page }) => {
  await page.goto('/');

  await page.locator('//input[@data-test="username"]').fill(swagloginData.validLogin.username);
  await page.locator('[data-test="password"]').fill(swagloginData.validLogin.password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
  await page.waitForTimeout(2000);
});
