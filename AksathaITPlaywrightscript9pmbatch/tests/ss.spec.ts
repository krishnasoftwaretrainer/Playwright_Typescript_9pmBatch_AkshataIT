import { test, expect } from '@playwright/test';

test('Swag Valid Login', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout(2000);

const drop= page.getByPlaceholder('Month');
await page.waitForTimeout(2000);
await drop.focus();
await page.waitForTimeout(2000);
console.log(await drop.getAttribute('placeholder'));
console.log(await drop.textContent());
console.log(await drop.innerText());
// await page.getByPlaceholder('Month').selectOption('March');
// await page.waitForTimeout(2000);
// await page.getByPlaceholder('Month').selectOption({label:'September'});
// await page.waitForTimeout(2000);
// await page.getByPlaceholder('Month').selectOption({index: 5});
await page.waitForTimeout(2000);



// const checks=page.locator('input[type="checkbox"]');
// for(let i=0;i<await checks.count();i++)
// {
// await checks.nth(i).check();
// await page.waitForTimeout(2000);
// }

// for(let i=0;i<await checks.count();i++)
// {
// await checks.nth(i).uncheck();
// await page.waitForTimeout(2000);
// }



// await page.locator('#checkbox1').first().check();
// await page.locator('#checkbox2').first().check();
// await page.locator('#checkbox3').first().check();
// await page.waitForTimeout(2000);
// await page.locator('#checkbox1').first().uncheck();
// await page.locator('#checkbox2').first().uncheck();
// await page.locator('#checkbox3').first().uncheck();

});