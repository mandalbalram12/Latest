import { expect } from '@playwright/test';
import userData from '../data';
class loginPage{

    constructor(page){

        //Elements locator available in Login Page
        this.loginHeading = page.getByRole('heading',{name:'Login to your account'});
        this.inputUsername = page.locator('[data-qa="login-email"]');
        this.inputPassowrd = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
        this.loggedAsUser = page.locator('//a//b');
        this.logOutUser = page.getByRole('link',{name:' Logout'});
    

    }

    //Verify the Login page after login
    async verifyLoginHeading(){
        await expect(this.loginHeading).toBeVisible();
        console.log('Verified the LoginPage');
    
    }

    //Fill username
    async fillUsername(){
        await this.inputUsername.fill(userData.username);
        await this.inputUsername.screenshot({ path: 'elementscreenshot.png' });
        
    }

    //Fill password
    async fillPassword(){
        await this.inputPassowrd.fill(userData.password);
        console.log('Screenshot Taken');
        
    }

    //Click login Button
    async clickLoginButton(){
        await this.loginButton.click();
        
    }
    
    //Verify logged in as User
    async verifyLoggedIn(){
        await expect(this.loggedAsUser).toContainText(userData.user);
        console.log('Verified Logged in as User');
        
    }

    //Click on Logout Button
    async clickLogoutButton(){
        await this.logOutUser.click();
        console.log('User Logged Out');
        console.log('This test case is running successfully');
        
    }
}
export default loginPage;