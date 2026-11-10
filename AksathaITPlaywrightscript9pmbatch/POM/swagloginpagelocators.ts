import { Page } from '@playwright/test';

export class LoginPage {

  page: Page;
 uname: any;
  pswd: any;
  loginButton: any;
  
  constructor(page: Page) {
    this.page = page;

    this.uname = page.locator('#user-name');
    this.pswd = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async openApplication() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async loginToApplication(username: string, password: string) {
    await this.uname.fill(username);
    await this.pswd.fill(password);
    await this.loginButton.click();
  }

  async closeApplication() {
    await this.page.close();
  }
}