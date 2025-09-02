import { test, expect } from '@playwright/test';

export class Home {
    constructor(page) {
        this.page = page;
        this.click_search = this.page.getByPlaceholder('Search in Daraz');
        this.search = this.page.locator('.search-box__button--1oH7');
        
        // Define locators only in constructor, not results
        this.productList = this.page.locator('.Bm3ON');
        // this.productTitle = this.page.locator(`a[title="${productN/ame}"`);
        // this.selectProduct = this.page.locator('.RfADt');
        this.addToCartBtn = this.page.getByText("Add to Cart");
        // this.addToCartBtn = this.page.locator('.add-to-cart-buy-now-btn.pdp-button.pdp-button_type_text.pdp-button_theme_orange.pdp-button_size_xl');


        this.goCart = this.page.locator('.cart-icon-daraz');
        this.closeIcon = this.page.locator('.next-dialog-close');
    }

    async home(iphone) {
        await this.page.waitForTimeout(1000)
        await this.click_search.fill(iphone);
        // await this.page.keyboard.press("Enter");
        await this.search.click()
        // Wait for products to load
        await this.productList.first().waitFor({ state: 'visible', timeout: 15000 });
    }

async addToCart(productName) {
    // Get all product texts
    const products = await this.productList.allTextContents()
    // console.log(product)
    // console.log(products)
    // console.log(productName)
    for(let product of products){
     if (product.includes(productName)){
        console.log(productName)
        await this.page.locator(`text="${productName}"`).click()
        await this.page.waitForTimeout(1000)
        break;
     }
     }
    // await this.addToCartBtn.first().waitFor({ state: 'visible', timeout: 15000 })
    await this.addToCartBtn.click() |
    await expect(this.page.locator('.cart-message-text')).toHaveText("Added to cart successfully!")      

}
}