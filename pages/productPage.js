//Import userData and CustomActions
import userData from '../data';
import CustomActions from '../webElementActions';

//Inherit the CustomActions
class productPage extends CustomActions{
    constructor(page){


        super(page);
        this.page= page;

        /** Elements Locator available in Product Page */
        this.productSearchBox = ()=> page.getByRole('textbox',{name:'Search Product'});
        this.clickProductSearchButton = ()=> page.locator('#submit_search');
        this.productItem = ()=> page.locator('div[class="productinfo text-center"] p');
        this.productImage = ()=> page.locator('img[alt="ecommerce website products"]');
        this.addToCartButton = ()=> page.locator('div[class="productinfo text-center"] a[class="btn btn-default add-to-cart"]');
        this.modalConfirmationProduct = ()=> page.locator('//p[normalize-space()="Your product has been added to cart."]');
        this.continueShopping = ()=> page.getByRole('button',{name:'Continue Shopping'});
        this.viewCart = ()=> page.locator('//p//a');
    }

    //Search item with Searchbox
    async searchProductItem(){
        await this.fillOnElement(this.productSearchBox(),userData.dress);
        await this.clickOnElement(this.clickProductSearchButton());
        return this;
    }
    
    //Verify Product available in Page
    async verifyProduct(){
        await this.elementVisible(this.productItem());
        console.log('Verified the Search Product');
        return this;
    }

    //Adding Product to Cart
    async chooseProduct(){
        await this.hoverOnElement(this.productImage());
        await this.clickOnElement(this.addToCartButton());
        return this;
    }

    //Verifying confirmation Modal
    async verifyConfirmationModal(){
        await this.containText(this.modalConfirmationProduct(),'Your product has been added to cart.');
        console.log('Verified the Confirmation Modal after adding to Cart');
        return this;
    }

    //Clicking on Continue Shopping Button
    async clickContinueShopping(){
        await this.clickOnElement(this.continueShopping());
        return this;

    }


}
//Export productPage
export default productPage;