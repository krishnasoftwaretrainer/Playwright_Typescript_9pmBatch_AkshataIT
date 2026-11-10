import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

const workbook = XLSX.readFile(
  'DataDrivenFrameWork/swagtestdataexcel.xlsx'
);

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const sloginData = XLSX.utils.sheet_to_json<any>(sheet, {
  defval: ''
});

for (let i = 0; i < sloginData.length; i++) {

  test(String(sloginData[i].testname).trim(), async ({ page }) => {

    const username = String(sloginData[i].username ?? '').trim();
    const password = String(sloginData[i].password ?? '').trim();
    const expected = String(sloginData[i].expected ?? '').trim();

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);

    await page.locator('[data-test="login-button"]').click();

    if (expected.toLowerCase() === 'success') {
      await expect(page).toHaveURL(/inventory\.html/);
      await expect(page.locator('.title')).toHaveText('Products');
    } else {
      await expect(page.locator('[data-test="error"]'))
        .toContainText(expected);
    }
  });
}