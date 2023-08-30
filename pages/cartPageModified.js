//import CustomActions
import CustomActions from '../webElementActions';

//Inheriting the property of CustomActions
class cartPage extends CustomActions{
    constructor(page){

        super(page);
        this.page= page;

    }    
        /** Elements locator in Cart Page */
        cartElements={
        cartHomeButton : this.page.getByRole('link',{name:'Home'}),
        shoppingCart : this.page.locator('li[class="active"]'),
        checkoutButton : this.page.locator('.btn.btn-default.check_out'),
        cartInfo : this.page.locator('#cart_info'),
        productInfo : this.page.getByRole('link',{name:'Green Side Placket Detail T-Shirt'}),
        productRemove : this.page.locator('.cart_delete'),
        emptyCart : this.page.locator('//p//b'),
        }

    //Verify Cart elements are available
    async verifyCartElements(){
        await this.customVisible(this.cartElements.cartHomeButton.last());
        await this.customVisible(this.cartElements.shoppingCart);
        console.log("Verified the Elements in Cart Page");
        return this;

    }

    //Verify added Produuct in Cart
    async verifyAddedProduct(){
        await this.customVisible(this.cartElements.productInfo);
        console.log('Verified the Added product in Cart Page');
        return this;

    }

    //Remove added product from Cart
    async removeProduct(){
        await this.customClick(this.cartElements.productRemove);
        return this;

    }
    
    //Verify empty cart after removal of Added item
    async verifyEmptyCart(){
        await this.customContainText(this.cartElements.emptyCart,'Cart is empty!');
        console.log('Verified the Cart is EMpty after Removing an item');
        return this;
    }

}

//Export CartPage
export default cartPage;