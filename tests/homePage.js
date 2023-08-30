import { expect } from '@playwright/test';
class homePage{
    constructor(page){

        //Elements Locator available in Home Page
        this.page = page;
        this.homeButton = page.getByRole('link',{name:' Home'});
        this.productButton = page.getByRole('link',{name:' Products'});
        this.cartButton = page.getByRole('link',{name:' Cart'});
        this.signUpButton = page.getByRole('link',{name:' Signup / Login'});
        this.testCaseButton = page.getByRole('link',{name:' Test Cases'});
        this.contactUsButton = page.getByRole('link',{name:' Contact us'});
    
        
    }

    //Navigate to Homepage
    async visitHomePage(){
        await this.page.goto('/');

    }

    //Verify Homepage and fetch Title of Page
    async verifyHomePage(){
        await expect(this.homeButton).toBeVisible();
        console.log("The title of Page:", await this.page.title());
  
    };

    //Click on Cart Button available at Header
    async clickCartButton(){
        await this.cartButton.click();


    }
    
    //Click Login/Signup Button available at Header of Homepage
    async clickLoginSignupButton(){
        await this.signUpButton.click();
    }

    //Click Contact Us Button available in Header
    async clickContactUs(){
        await this.contactUsButton.click();

    }

    //Click Product Button
    async clickProductButton(){
        await this.productButton.click();
    }
    
    //Click Cart Button
    async clickCartButton(){
        await this.cartButton.click();
    }
}

export default homePage;