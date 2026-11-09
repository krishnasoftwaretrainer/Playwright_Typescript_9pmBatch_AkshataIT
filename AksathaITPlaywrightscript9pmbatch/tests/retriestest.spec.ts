 import {test, expect,chromium} from '@playwright/test';

test('Check Rtries', async ({context, page})=>
{
 await page.goto('https:///www.saucedemo.com/');
 await expect(page).toHaveTitle('dfsgdfgdr');
 await page.waitForTimeout(2000);
});