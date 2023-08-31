import { expect } from '@playwright/test';
class cartPage{
    constructor(page){
        this.page= page;
        //Elements locator in Cart Page
        this.cartHomeButton = page.getByRole('link',{name:'Home'});
        this.shoppingCart = page.locator('li[class="active"]');
        this.checkoutButton = page.locator('.btn btn-default.check_out');
        this.cartInfo = page.locator('#cart_info');
        this.productInfo = page.getByRole('link',{name:'Green Side Placket Detail T-Shirt'});
        this.productRemove = page.locator('.cart_delete');
        this.emptyCart = page.locator('//p//b');
    }

    //Verify Cart elements are available
    async verifyCartElements(){
        await expect(this.cartHomeButton.last()).toBeVisible();
        await expect(this.shoppingCart).toBeVisible();
        console.log("Verified the Elements in Cart Page");

    }

    //Verify added Produuct in Cart
    async verifyAddedProduct(){
        await expect(this.productInfo).toBeVisible();
        console.log('Verified the Added product in Cart Page');

    }

    //Remove added product from Cart
    async removeProduct(){
        await this.productRemove.click();

    }
    
    //Verify empty cart after removal of Added item
    async verifyEmptyCart(){
        await expect(this.emptyCart).toContainText('Cart is empty!');
        console.log('Verified the Cart is EMpty after Removing an item');
    }

}
export default cartPage;