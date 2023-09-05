import userData from "../data";
import CustomActions from "../webElementActions";
class loginPage01 extends CustomActions{
    constructor(page){
        super();
        this.page = page;
        this.loginLink = page.getByRole('link',{name:' Signup / Login'});
        this.enterUsername = page.locator('[data-qa="login-email"]');
        this.enterPassword = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
      
    }

    async Naviagte(){
        await this.customGoto('/');

    }

    async enterCredentials(){
        await this.customClick(this.loginLink);
        await this.customVisible(this.enterUsername);
        await this.customFill(this.enterUsername,userData.username);
        await this.customFill(this.enterPassword,userData.password);
        await this.customClick(this.loginButton);
    }
}

export default loginPage01;