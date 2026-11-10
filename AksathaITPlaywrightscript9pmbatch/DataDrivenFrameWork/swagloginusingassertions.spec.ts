import { test, expect } from '@playwright/test';

import sloginData from '../DataDrivenFrameWork/swagalltestdataloop.json';


for (const data of sloginData.testCases) 
    {

  test(data.testName, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill(data.username);

    await page.locator('[data-test="password"]')
      .fill(data.password);

    await page.locator('[data-test="login-button"]')
      .click();


    if (data.testName === 'Valid login - SauceDemo') {

      await expect(page).toHaveURL(/inventory\.html/);

      await expect(page.locator('.title'))
        .toHaveText('Products');

    } else {

      await expect(page.locator('[data-test="error"]'))
        .toBeVisible();

    }

  });
}