//import CustomActions
import CustomActions from '../webElementActions';

//Inheriting the property of CustomActions
class cartPage extends CustomActions{
    constructor(page){

        super(page);
        this.page= page;

        /** Elements locator in Cart Page */
        this.cartHomeButton = this.page.getByRole('link',{name:'Home'});
        this.shoppingCart = this.page.locator('li[class="active"]');
        this.checkoutButton = this.page.locator('.btn.btn-default.check_out');
        this.cartInfo = this.page.locator('#cart_info');
        this.productInfo = this.page.getByRole('link',{name:'Green Side Placket Detail T-Shirt'});
        this.productRemove = this.page.locator('.cart_delete');
        this.emptyCart = this.page.locator('//p//b');

    }    

    //Verify Cart elements are available
    async verifyCartElements(){
        await this.customVisible(this.cartHomeButton.last());
        await this.customVisible(this.shoppingCart);
        console.log("Verified the Elements in Cart Page");
        return this;

    }

    //Verify added Produuct in Cart
    async verifyAddedProduct(){
        await this.customVisible(this.productInfo);
        console.log('Verified the Added product in Cart Page');
        return this;

    }

    //Remove added product from Cart
    async removeProduct(){
        await this.customClick(this.productRemove);
        return this;

    }
    
    //Verify empty cart after removal of Added item
    async verifyEmptyCart(){
        await this.customContainText(this.emptyCart,'Cart is empty!');
        console.log('Verified the Cart is EMpty after Removing an item');
        return this;
    }

}

//Export CartPage
export default cartPage;