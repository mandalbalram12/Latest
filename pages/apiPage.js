//Import Custom Actions
import CustomActions from "../webElementActions";
import {request, expect } from '@playwright/test'
const cred = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
let loginToken;

//Inherit property of CustomActions
class loginByPass extends CustomActions{
    constructor(page){
        super();
        this.page= page;
    }

    // By passing login with API
    async loginByPass(){
        const apiContext = await request.newContext();
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
          data: cred,
        })
        this.elementToBeTruthy(loginResponse.ok())
        const loginJSONResp = await loginResponse.json();
        loginToken = loginJSONResp.token;
        console.log("Token is:", loginToken);
      
    
       this.page.addInitScript(value => {
        window.localStorage.setItem('token', value);
      }, loginToken); 
    }

    //Verify the login 
    async verifyLoggedIn(){
        await this.navigate("https://rahulshettyacademy.com/client");
        await this.getTitle();
        await this.page.screenshot({path:'fullpage.png',fullPage:true});
    }
}

//Export loginByPass class
export default loginByPass;
