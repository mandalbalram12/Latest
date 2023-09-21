//Import Custom Actions
import CustomActions from "../webElementActions";
import {request, expect } from '@playwright/test'
const cred = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
let loginToken;


class loginByPass extends CustomActions{
    constructor(page){
        super();
        this.page= page;
    }

    async loginByPass(){
        const apiContext = await request.newContext();
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
          data: cred,
        })
        expect(loginResponse.ok()).toBeTruthy();
        const loginJSONResp = await loginResponse.json();
        loginToken = loginJSONResp.token;
        console.log("Token is:", loginToken);
      
    
       this.page.addInitScript(value => {
        window.localStorage.setItem('token', value);
      }, loginToken); 
    }
    async verifyLoggedIn(){
        await this.customGoto("https://rahulshettyacademy.com/client");
        await this.customGetTitle();
        // console.log(`Title : ${await this.page.title()}`);
        await this.page.screenshot({path:'fullpage.png',fullPage:true});
    }
}
export default loginByPass;
