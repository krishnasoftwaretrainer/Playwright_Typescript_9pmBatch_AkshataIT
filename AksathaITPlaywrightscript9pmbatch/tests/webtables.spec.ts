import { test, expect } from '@playwright/test';

test('Table Rows and Columns', async ({ page }) => {

  await page.goto('https://demoqa.com/webtables');
  
  const headerrow=page.locator('//table/thead/tr');
  console.log('Header Rows: '+await headerrow.count());

const headercolumns=page.locator('//table/thead/tr/th');
  console.log('Header Columns: '+await headercolumns.count());

  const bodyrows=page.locator('//table/tbody/tr');
  console.log('Body Rows: '+await bodyrows.count());

// const bodycolumns=page.locator('//table/tbody/tr[1]/td');
const bodycolumns=page.locator('//table/tbody/tr/td');
  console.log('Body Columns: '+await bodycolumns.count());

  //Print One Row all Columns
    const row1columns=page.locator('//table/tbody/tr[2]/td');
    for(let i=0;i<await row1columns.count();i++)
    {
      console.log(await row1columns.nth(i).textContent());
    }

    //Print all Rows and all Columns
    const allrows=page.locator('//table/tbody/tr');

    for(let i=0;i<await allrows.count();i++)  //Ourter Loop:Rows
    {
      const allcolumns=allrows.nth(i).locator('td');
      for(let j=0;j<await allcolumns.count();j++) //Inner Loop:Columns
      {
        console.log(await allcolumns.nth(j).textContent());
      }
    }

  await page.waitForTimeout(2000);
});