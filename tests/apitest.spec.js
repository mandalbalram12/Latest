const { test, request, expect } = require('@playwright/test');
const cred = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
let loginToken;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
      data: cred,
    })
    expect(loginResponse.ok()).toBeTruthy();
    const loginJSONResp = await loginResponse.json();
    loginToken = loginJSONResp.token;
    console.log("Token is:", loginToken);
  });

test('Test login', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
  
  // Check if the token is correctly set in localStorage
  const tokenInLocalStorage = await page.evaluate(() => {
    return window.localStorage.getItem('token');
  });

  console.log(`Token in localStorage: ${tokenInLocalStorage}`);

  console.log(`Title: ${await page.title()}`);
  await page.screenshot({ path: 'fullpage.png', fullPage: true });
});
