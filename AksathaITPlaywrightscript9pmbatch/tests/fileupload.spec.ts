import { test, expect } from '@playwright/test';

test('Single Upload File', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/FileUpload.html');
   await page.pause();
  const fileInput = page.locator('#input-4');
  await fileInput.setInputFiles('C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg');
    await page.waitForTimeout(2000);
});

test.only('Multiple files Upload', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/FileUpload.html');
   await page.pause();
  const fileInput = page.locator('#input-4');
  const filesToUpload = [
    'C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg',
    'C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg',
    'C:\\Users\\HP\\OneDrive\\Pictures\\134356469600071741.jpg'
  ];
  await fileInput.setInputFiles(filesToUpload);
    await page.waitForTimeout(2000);
});