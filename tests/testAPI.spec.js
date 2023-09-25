const { test, request, expect } = require('@playwright/test');
const cred = { userEmail: "pokemon100@yopmail.com", userPassword: "IamTester1710" };
let loginToken;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://www.automationexercise.com/login", {
      data: cred,
    });
  
    // Log the response for debugging
    console.log("API Response:", loginResponse.status(), loginResponse.statusText());
  
    // Check if login was successful (HTTP status 200)
    expect(loginResponse.status()).toBeTruthy();
  
    const loginJSONResp = await loginResponse.json();
    loginToken = loginJSONResp.token;
    console.log("Token is:", loginToken);
  });

  test('Test login', async ({ page }) => {
    await page.goto("https://www.automationexercise.com/login");
    
    // Check if the token is correctly set in localStorage
    const tokenInLocalStorage = await page.evaluate(() => {
      return window.localStorage.getItem('token');
    });
  
    console.log(`Token in localStorage: ${tokenInLocalStorage}`);
  
    console.log(`Title: ${await page.title()}`);
    await page.screenshot({ path: 'fullpage.png', fullPage: true });
  });
   
  