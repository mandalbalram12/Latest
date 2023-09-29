//Import CustomAction
import CustomActions from '../webElementActions';

//Inherit CustomActions 
class homePage extends CustomActions{
    constructor(page){

            /**Locators available in homePage*/
        super();
        this.page = page;
        this.homeButton = ()=> page.getByRole('link',{name:' Home'});
        this.productButton = ()=> page.getByRole('link',{name:' Products'});
        this.cartButton = ()=> page.getByRole('link',{name:' Cart'});
        this.signUpButton = ()=> page.getByRole('link',{name:' Signup / Login'});
        this.testCaseButton = ()=> page.getByRole('link',{name:' Test Cases'});
        this.contactUsButton = ()=> page.getByRole('link',{name:' Contact us'});
        
    }
    

    //Navigate to Homepage
    async visitHomePage(){
        await this.navigate('/');
        return this;

    }

    /**Verify Homepage and fetch Title of Page */
    async verifyHomePage(){
        await this.elementVisible(this.homeButton());
        console.log(typeof(this.homeButton))
        console.log('Verified')
        return this;
    };

    //Click on Cart Button available at Header
    async clickCartButton(){
        await this.clickOnElement(this.cartButton());
        return this;
    }
    
    //Click Login/Signup Button available at Header of Homepage
    async clickLoginSignupButton(){
        await this.clickOnElement(this.signUpButton());
        return this;
    }

    //Click Contact Us Button available in Header
    async clickContactUs(){
        await this.clickOnElement(this.contactUsButton());
        return this;

    }

    // //Click Product Button
    async clickProductButton(){
        await this.clickOnElement(this.productButton());
        return this;
    }
    
}

//Export homePage
// export const homePageObject = new homePage();
export default homePage;
