// Import userData and CustomActions
import userData from '../data';
import CustomActions from '../webElementActions';

//Inherit the CustomActions
class loginPage extends CustomActions{

    constructor(page){

        super(page);
        this.page= page;
    }

        /**Element's locator available in Login Page */
        loginElements={
        loginHeading : this.page.getByRole('heading',{name:'Login to your account'}),
        inputUsername : this.page.locator('[data-qa="login-email"]'),
        inputPassowrd : this.page.locator('[data-qa="login-password"]'),
        loginButton : this.page.locator('[data-qa="login-button"]'),
        loggedAsUser : this.page.locator('//a//b'),
        logOutUser : this.page.getByRole('link',{name:' Logout'}),
        }

    //Verify the Login page after login
    async verifyLoginHeading(){
        await this.customVisible(this.loginElements.loginHeading);
        console.log('Verified the LoginPage');
        return this;
    
    }

    //Fill username
    async fillUsername(){
        await this.customFill(this.loginElements.inputUsername,userData.username);
        return this;
        
    }

    //Fill password
    async fillPassword(){
        await this.customFill(this.loginElements.inputPassowrd,userData.password);
        return this;
    }

    //Click login Button
    async clickLoginButton(){
        await this.customClick(this.loginElements.loginButton);
        return this;
        
    }
    
    //Verify logged in as User
    async verifyLoggedIn(){
        await this.customContainText(this.loginElements.loggedAsUser,userData.user);
        console.log('Verified Logged in as User');
        return this;
        
    }

    //Click on Logout Button
    async clickLogoutButton(){
        await this.customClick(this.loginElements.logOutUser);
        console.log('User Logged Out');
        console.log('This test case is running successfully');
        return this;
        
    }
}
//Export loginPage
export default loginPage;