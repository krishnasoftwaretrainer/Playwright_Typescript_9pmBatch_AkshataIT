import { test, expect } from '@playwright/test';

test.only('Button Click', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Login'}).click();
const login=page.getByRole('button', { name: 'Login'});
console.log(await login.textContent());
console.log(await login.innerText());
});

test('Text Box Input:fill and type', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000);
//await page.pause();
// await page.getByRole('textbox', { name: 'Username'}).fill('test data');
// await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');

//await page.getByRole('textbox', { name: 'Username'}).type('test data');
//await page.getByRole('textbox', { name: 'Username'}).clear();
await page.getByRole('textbox', { name: 'Username'}).type('standard_user');
console.log(await page.getByRole('textbox', { name: 'Username'}).inputValue());
const username=page.getByRole('textbox', { name: 'Username'});
console.log(await username.getAttribute('id'));
await page.waitForTimeout(2000);
});

test('Text Area Input:fill and type', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
//await page.waitForTimeout(2000);
await page.pause();
// await page.getByRole('textbox', { name: 'Username'}).fill('test data');
// await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');

//await page.locator('//textarea[@ng-model="Adress"]').type('Ameerpet,\n Hyderabad,\n50001');
// await page.getByRole('textbox', { name: 'Username'}).clear();
// await page.getByRole('textbox', { name: 'Username'}).type('standard_user');
await page.getByRole('textbox', { name: 'First Name'}).pressSequentially('standard_user',{ delay: 100 });

await page.waitForTimeout(2000);
});


test('Radio Button and CheckBox', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
//await page.pause();
await page.getByRole('radio', { name: 'Male'}).first().check();

//Check Box
await page.locator('#checkbox1').first().check();
await page.waitForTimeout(2000);

await page.locator('#checkbox1').check();
await page.waitForTimeout(2000);
await page.locator('#checkbox2').check();
await page.waitForTimeout(2000);
await page.locator('#checkbox3').check();
await page.waitForTimeout(2000);
await page.locator('#checkbox1').first().uncheck();
await page.waitForTimeout(2000);

});

test('Multiple CheckBoxes', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
//Check Box

const checkboxes=page.locator('//input[@type="checkbox"]');

for(let i=0;i<await checkboxes.count();i++)
{
   checkboxes.nth(i).check(); 
   await page.waitForTimeout(2000);

}
await page.waitForTimeout(2000);

});

test('Focus', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
//await page.waitForTimeout(2000);

await page.locator('//textarea[@ng-model="Adress"]').focus();
await page.pause();
//await page.locator('//textarea[@ng-model="Adress"]').type('Ameerpet,\n Hyderabad,\n50001');
await page.waitForTimeout(2000);

});

test('Drop Down', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
//await page.waitForTimeout(2000);

const dropdown=page.locator('//select[@ng-model="monthbox"]');
await page.pause();
await dropdown.focus();
//Select dropdown value by index
await dropdown.selectOption({index:4});
//Select dropdown value by value
await dropdown.selectOption({value:'August'});
//Select dropdown value by label
await dropdown.selectOption({label:'December'});

await page.waitForTimeout(2000);

});