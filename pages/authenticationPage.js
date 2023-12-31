// Import userData and CustomActions
import userData from '../data';
import CustomActions from '../webElementActions';

//Inherit the CustomActions
class loginPage extends CustomActions{

    constructor(page){

        super(page);
        this.page= page;
        /**Element's locator available in Login Page */
        this.loginHeading = ()=> page.getByRole('heading',{name:'Login to your account'});
        this.inputUsername = ()=> page.locator('[data-qa="login-email"]');
        this.inputPassowrd = ()=> page.locator('[data-qa="login-password"]');
        this.loginButton = ()=> page.locator('[data-qa="login-button"]');
        this.loggedAsUser = ()=> page.locator('//a//b');
        this.logOutUser = ()=> page.getByRole('link',{name:' Logout'});
    }


    //Verify the Login page after login
    async verifyLoginHeading(){
        await this.elementVisible(this.loginHeading());
        console.log('Verified the LoginPage');
        return this;
    
    }

    //Fill username
    async fillUsername(userData){
        await this.fillOnElement(this.inputUsername(),userData.username);
        return this;
        
    }


    //Fill password
    async fillPassword(userData){
        await this.fillOnElement(this.inputPassowrd(),userData.password);
        return this;
    }    



    //Click login Button
    async clickLoginButton(){
        await this.clickOnElement(this.loginButton());
        return this;
        
    }
    
    //Verify logged in as User
    async verifyLoggedIn(){
        await this.containText(this.loggedAsUser(),userData.user);
        return this;
        
    }

    //Click on Logout Button
    async clickLogoutButton(){
        await this.clickOnElement(this.logOutUser());
        console.log('User Logged Out');
        console.log('This test case is running successfully');
        return this;
        
    }
}
//Export loginPage
export default loginPage;