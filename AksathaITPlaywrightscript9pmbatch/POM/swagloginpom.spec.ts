import { test } from '@playwright/test';
import { LoginPage } from '../POM/swagloginpagelocators';

test('Login Scenario', async ({ page }) => {

  const loginPageInstance = new LoginPage(page);

  await loginPageInstance.openApplication();

  await loginPageInstance.loginToApplication(
    'standard_user',
    'secret_sauce'
  );

  await page.waitForTimeout(1000);

  await loginPageInstance.closeApplication();
});