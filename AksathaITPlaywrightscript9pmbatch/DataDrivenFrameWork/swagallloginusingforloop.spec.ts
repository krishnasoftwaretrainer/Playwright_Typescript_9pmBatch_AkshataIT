import { test, expect } from '@playwright/test';

import sloginData from '../DataDrivenFrameWork/swagalltestdataloop.json';


for (let i = 0; i < sloginData.testCases.length; i++)  //0 1 2 3 4
  {

  test(sloginData.testCases[i].testName, async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill(sloginData.testCases[i].username);

    await page.locator('[data-test="password"]')
      .fill(sloginData.testCases[i].password);

    await page.locator('[data-test="login-button"]').click();


    if (i === 0) {

      // Valid login

      await expect(page).toHaveURL(/inventory\.html/);

      await expect(page.locator('.title'))
        .toHaveText('Products');

    }


    if (i === 1 || i === 2) {

      // Invalid username / password

      await expect(page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match');

    }


    if (i === 3) {

      // Empty username

      await expect(page.locator('[data-test="error"]'))
        .toContainText('Username is required');

    }


    if (i === 4) {

      // Empty password

      await expect(page.locator('[data-test="error"]'))
        .toContainText('Password is required');

    }

  });

}
