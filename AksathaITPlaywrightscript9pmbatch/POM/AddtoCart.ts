import { Page } from '@playwright/test';

export class AddToCartPage {

  page: Page;
  addToCartButton1: any;
  addToCartButton2: any;
  cartLogo: any;
  sideMenuBar: any;
  logoutButton: any;

  constructor(page: Page) {
    this.page = page;

    this.addToCartButton1 = page.locator('#add-to-cart-sauce-labs-backpack');
     this.addToCartButton2 = page.locator('#add-to-cart-sauce-labs-bike-light');
    // this.cartLogo = page.locator('#shopping_cart_container');
    // this.sideMenuBar = page.locator('#react-burger-menu-btn');
    // this.logoutButton = page.locator('#logout_sidebar_link');
  }

  async addProductToCart() {
    await this.addToCartButton1.click();
    await this.addToCartButton2.click();
    //await this.cartLogo.click();
  }

  async logoutFromApplication() {
    await this.sideMenuBar.click();
    await this.logoutButton.click();
  }
}