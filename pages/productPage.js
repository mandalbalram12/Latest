import { expect } from '@playwright/test';
import userData from '../data';
class productPage{
    constructor(page){

        //Elements Locator available in Product Page
        this.page= page;
        this.productSearchBox= page.getByRole('textbox',{name:'Search Product'});
        this.clickProductSearchButton= page.locator('#submit_search');
        this.productItem= page.locator('//div//p');
        this.productImage = page.getByAltText('ecommerce website products');
        this.addToCartButton= page.locator('.add-to-cart');
        this.modalConfirmationProduct= page.locator('//div//p');
        this.continueShopping = page.getByRole('button',{name:'Continue Shopping'});
        this.viewCart= page.locator('//p//a');

    }

    //Search item with Searchbox
    async searchProductItem(){
        await this.productSearchBox.fill(userData.dress);
        await this.clickProductSearchButton.click();
    }
    
    //Verify Product available in Page
    async verifyProduct(){
        await expect(this.productItem.nth(2)).toBeVisible();
        console.log('Verified the Search Product');
    }

    //Adding Product to Cart
    async chooseProduct(){
        await this.productImage.hover({TimeRanges:20000});
        // await this.page.pause();
        await this.addToCartButton.nth(1).click();
    }

    //Verifying confirmation Modal
    async verifyConfirmationModal(){
        await expect(this.modalConfirmationProduct.first()).toContainText('Your product has been added to cart.');
        console.log('Verified the Confirmation Modal after adding to Cart');
    }

    //Clicking on Continue Shopping Button
    async clickContinueShopping(){
        await this.continueShopping.click();

    }


}
export default productPage;