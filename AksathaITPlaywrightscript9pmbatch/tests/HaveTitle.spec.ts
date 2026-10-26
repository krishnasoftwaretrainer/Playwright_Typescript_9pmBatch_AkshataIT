import { test, expect } from '@playwright/test';

test('Check HaveTitle', async ({ page }) => {

   //await page.goto('https://playwright.dev/');
   await page.goto('https://www.saucedemo.com/');
   await page.pause();
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);


});