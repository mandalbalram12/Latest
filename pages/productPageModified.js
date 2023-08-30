//Import userData and CustomActions
import userData from '../data';
import CustomActions from '../webElementActions';

//Inherit the CustomActions
class productPage extends CustomActions{
    constructor(page){


        super(page);
        this.page= page;
    }

    /** Elements Locator available in Product Page */
    productElements={
        productSearchBox : this.page.getByRole('textbox',{name:'Search Product'}),
        clickProductSearchButton : this.page.locator('#submit_search'),
        productItem : this.page.locator('//div//p'),
        productImage : this.page.getByAltText('ecommerce website products'),
        addToCartButton : this.page.locator('.add-to-cart'),
        modalConfirmationProduct : this.page.locator('//div//p'),
        continueShopping : this.page.getByRole('button',{name:'Continue Shopping'}),
        viewCart : this.page.locator('//p//a'),
    }


    //Search item with Searchbox
    async searchProductItem(){
        await this.customFill(this.productElements.productSearchBox,userData.dress);
        await this.customClick(this.productElements.clickProductSearchButton);
        return this;
    }
    
    //Verify Product available in Page
    async verifyProduct(){
        await this.customVisible(this.productElements.productItem.nth(2));
        console.log('Verified the Search Product');
        return this;
    }

    //Adding Product to Cart
    async chooseProduct(){
        await this.customHover(this.productElements.productImage);
        await this.customClick(this.productElements.addToCartButton.nth(1));
        return this;
    }

    //Verifying confirmation Modal
    async verifyConfirmationModal(){
        await this.customContainText(this.productElements.modalConfirmationProduct.first(),'Your product has been added to cart.');
        console.log('Verified the Confirmation Modal after adding to Cart');
        return this;
    }

    //Clicking on Continue Shopping Button
    async clickContinueShopping(){
        await this.customClick(this.productElements.continueShopping);
        return this;

    }


}
//Export productPage
export default productPage;