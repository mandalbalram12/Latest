import { test, request, expect } from '@playwright/test'
const cred = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
let loginToken;


test('Test login', async ({ page }) => {

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
      data: cred,
    })
    expect(loginResponse.ok()).toBeTruthy();
    const loginJSONResp = await loginResponse.json();
    loginToken = loginJSONResp.token;
    console.log("Token is:", loginToken);
  

   page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, loginToken);

await page.goto("https://rahulshettyacademy.com/client");
console.log(`Title : ${await page.title()}`);
await page.screenshot({path:'fullpage.png',fullPage:true});

  
});