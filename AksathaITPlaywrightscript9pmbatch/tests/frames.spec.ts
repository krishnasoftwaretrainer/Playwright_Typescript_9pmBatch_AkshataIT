import { test, expect } from '@playwright/test';

test('Single Frame', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Frames.html');
  
  //Outer Frame
  const outerFrame = page.frameLocator('#singleframe');
  
   const outerframetextbox=outerFrame.locator('//input[@type="text"]');
  outerframetextbox.fill('Krishna');
  await page.waitForTimeout(2000);
});

test.only('Nested Frame', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Frames.html');
  
  //Outer Frame
  const framebutton = page.locator('//a[@href="#Multiple"]');
  await framebutton.click();
   await page.waitForTimeout(2000);
  const frame=page.frameLocator('//iframe[@src="MultipleFrames.html"]').frameLocator('//iframe[@src="SingleFrame.html"]');

const outerframetextbox=frame.locator('//input[@type="text"]');
outerframetextbox.fill('Playwright');
  
  await page.waitForTimeout(4000);
});