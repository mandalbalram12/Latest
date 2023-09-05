//Import CustomActions and UserData
import CustomActions from "../webElementActions";
import userData from "../data";

//Inherit the CustomAction property
class LoginPage extends CustomActions{
    constructor(page){

      /**  All required element's locator in login Page */
        super();
        this.page = page;
        this.loginLink = page.getByRole('link',{name:'Log in'});
        this.usernameField = page.locator('#login-email-input');
        this.passwordField = page.locator('#login-password-input');
        this.submitButton = page.getByRole('button',{name:'Log In'});
    }

    //Navigate to ClickUP SIte
    async navigate() {
      await this.customGoto('https://clickup.com/');
    }

    //Click on Login Link
    async clickLoginLink(){

      await this.customClick(this.loginLink);
    }

    //Enter Username and Password
    async enterCredential(){

      //Enter username
      await this.customFill(this.usernameField,userData.userName);

      //Enter password
      await this.customFill(this.passwordField,userData.passWord);
    }

    //Click on Submit Button
    async clickSubmitButton(){
      await this.customClick(this.submitButton);
    }
    }

  //Export loginPage  
  export default LoginPage;

  