//Import CustomAction
import CustomActions from '../webElementActions';

//Inherit CustomActions 
class homePage extends CustomActions{
    constructor(page){

            /**Locators available in homePage*/
        super();
        this.page = page;
        this.homeButton= this.page.locator('link',{name:' Home'});
        this.productButton = this.page.locator('link',{name:' Products'});
        this.cartButton = this.page.locator('link',{name:' Cart'});
        this.signUpButton = this.page.locator('link',{name:' Signup / Login'});
        this.testCaseButton = this.page.locator('link',{name:' Test Cases'});
        this.contactUsButton = this.page.locator('link',{name:' Contact us'});
        
    }

    //Navigate to Homepage
    async visitHomePage(){
        await this.customGoto('/')
        return this;

    }

    /**Verify Homepage and fetch Title of Page */
    async verifyHomePage(){
 
        await this.customVisible(this.homeButton)
        return this;
    };

    //Click on Cart Button available at Header
    async clickCartButton(){
        await this.customClick(this.cartButton);
        return this;
    }
    
    //Click Login/Signup Button available at Header of Homepage
    async clickLoginSignupButton(){
        await this.customVisible(this.clickLoginSignupButton);
        return this;
    }

    //Click Contact Us Button available in Header
    async clickContactUs(){
        await this.customClick(this.contactUsButton);
        return this;

    }

    // //Click Product Button
    async clickProductButton(){
        await this.customClick(this.productButton);
        return this;
    }
    
}

//Export homePage
export default homePage;