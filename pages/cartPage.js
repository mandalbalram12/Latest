//import CustomActions
import CustomActions from '../webElementActions';

//Inheriting the property of CustomActions
class cartPage extends CustomActions{
    constructor(page){

        super(page);
        this.page= page;

        /** Elements locator in Cart Page */
        this.cartHomeButton = ()=> page.locator('ol[class="breadcrumb"] li a');
        this.shoppingCart = ()=> page.locator('li[class="active"]');
        this.checkoutButton = ()=> page.locator('.btn.btn-default.check_out');
        this.cartInfo = ()=> page.locator('#cart_info');
        this.productInfo = ()=> page.getByRole('link',{name:'Green Side Placket Detail T-Shirt'});
        this.productRemove = ()=> page.locator('.cart_delete');
        this.emptyCart = ()=> page.locator('//p//b');

    }    

    //Verify Cart elements are available
    async verifyCartElements(){
        await this.elementVisible(this.cartHomeButton());
        await this.elementVisible(this.shoppingCart());
        console.log("Verified the Elements in Cart Page");
        return this;

    }

    //Verify added Produuct in Cart
    async verifyAddedProduct(){
        await this.elementVisible(this.productInfo());
        console.log('Verified the Added product in Cart Page');
        return this;

    }

    //Remove added product from Cart
    async removeProduct(){
        await this.clickOnElement(this.productRemove());
        return this;

    }
    
    //Verify empty cart after removal of Added item
    async verifyEmptyCart(){
        await this.containText(this.emptyCart(),'Cart is empty!');
        console.log('Verified the Cart is EMpty after Removing an item');
        return this;
    }

}

//Export CartPage
export default cartPage;