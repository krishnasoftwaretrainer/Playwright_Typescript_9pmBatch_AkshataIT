import { test } from '@playwright/test';

import { LoginPage } from '../POM/swagloginpagelocators.ts';
import { AddToCartPage } from '../POM/AddtoCart.ts';
 import { YourCartPage } from '../POM/CartPage.ts';
// import { YourInfo } from '../POM/yourinfo.ts';
// import { OrderConfirmation } from '../POM/OrderConfirmation.ts';
// import { Overview } from '../POM/finish.ts';

 import testData from '../HybridFrameWork/swagTestData.json';

test('E2E Scenario 1', async ({ page }) => {

  const loginPageInstance = new LoginPage(page);

  await loginPageInstance.openApplication();

  await loginPageInstance.loginToApplication(
    testData.login.username,
    testData.login.password
  );

  await page.waitForTimeout(1000);

  const addToCartPageInstance = new AddToCartPage(page);

  await addToCartPageInstance.addProductToCart();

  await page.waitForTimeout(1000);

  const yourCartPageInstance = new YourCartPage(page);

  await yourCartPageInstance.checkout();

  await page.waitForTimeout(1000);

  const yourInfoInstance = new YourInfo(page);

  await yourInfoInstance.enterInformation(
    testData.yourInfo.firstName,
    testData.yourInfo.lastName,
    testData.yourInfo.zipCode
  );

//Finish 
const OverviewInstance=new Overview();
OverviewInstance.finishOrder();

//Back to Home
const OrderConfirmationInstance=new OrderConfirmation();
OrderConfirmationInstance.verifyConfirmation();
OrderConfirmationInstance.backToHome();

//Logout
const logoutPageInstance = new LogoutPage(page);
await logoutPageInstance.openMenu();
await logoutPageInstance.logout();

await page.waitForTimeout(1000);
});

/*
SwagLabs:E-Commerce:
LoginPage 
AddToCart
Cart Page 
CheckOut Page 
Continue 
Finish 
Back Home 
LogOut  */