//Import userData and CustomActions
import userData from '../data';
import CustomActions from '../webElementActions';

//Inherit the CustomActions
class productPage extends CustomActions{
    constructor(page){


        super(page);
        this.page= page;

        /** Elements Locator available in Product Page */
        this.productSearchBox = page.getByRole('textbox',{name:'Search Product'});
        this.clickProductSearchButton = page.locator('#submit_search');
        this.productItem = page.locator('//div//p');
        this.productImage = page.getByAltText('ecommerce website products');
        this.addToCartButton = page.locator('.btn.btn-default.add-to-cart');
        this.modalConfirmationProduct = page.locator('//div//p');
        this.continueShopping = page.getByRole('button',{name:'Continue Shopping'});
        this.viewCart = page.locator('//p//a');
    }

    //Search item with Searchbox
    async searchProductItem(){
        await this.customFill(this.productSearchBox,userData.dress);
        await this.customClick(this.clickProductSearchButton);
        return this;
    }
    
    //Verify Product available in Page
    async verifyProduct(){
        await this.customVisible(this.productItem.nth(2));
        console.log('Verified the Search Product');
        return this;
    }

    //Adding Product to Cart
    async chooseProduct(){
        await this.customHover(this.productImage);
        await this.customClick(this.addToCartButton.nth(0));
        return this;
    }

    //Verifying confirmation Modal
    async verifyConfirmationModal(){
        await this.customContainText(this.modalConfirmationProduct.first(),'Your product has been added to cart.');
        console.log('Verified the Confirmation Modal after adding to Cart');
        return this;
    }

    //Clicking on Continue Shopping Button
    async clickContinueShopping(){
        await this.customClick(this.continueShopping);
        return this;

    }


}
//Export productPage
export default productPage;