//Import CustomAction
import CustomActions from '../webElementActions';

//Inherit CustomActions 
class homePage extends CustomActions{
    constructor(page){

        //Elements Locator available in Home Page
        super(page);
        this.page = page;
        
    }

    /**Locators available in homePage*/
    homeElements={
        homeButton: this.page.getByRole('link',{name:' Home'}),
        productButton: this.page.getByRole('link',{name:' Products'}),
        cartButton : this.page.getByRole('link',{name:' Cart'}),
        signUpButton : this.page.getByRole('link',{name:' Signup / Login'}),
        testCaseButton : this.page.getByRole('link',{name:' Test Cases'}),
        contactUsButton : this.page.getByRole('link',{name:' Contact us'}),
    
    }


    //Navigate to Homepage
    async visitHomePage(){
        await this.customGoto('/');
        return this;

    }

    /**Verify Homepage and fetch Title of Page */
    async verifyHomePage(){
        await this.customVisible(this.homeElements.homeButton)
        console.log("The title of Page:", await this.page.title());
        return this;
  
    };

    //Click on Cart Button available at Header
    async clickCartButton(){
        await this.customClick(this.homeElements.cartButton);
        return this;
    }
    
    //Click Login/Signup Button available at Header of Homepage
    async clickLoginSignupButton(){
        // await this.customClick(this.homeElements.signUpButton());
        (await this.customVisible(this.homeElements.signUpButton)).customClick(this.homeElements.signUpButton);
        return this;
    }

    //Click Contact Us Button available in Header
    async clickContactUs(){
        await this.customClick(this.homeElements.contactUsButton);
        return this;

    }

    //Click Product Button
    async clickProductButton(){
        await this.customClick(this.homeElements.productButton);
        return this;
    }
    
}

//Export homePage
export default homePage;