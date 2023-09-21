//Import all page and test method
import { test} from '@playwright/test';
import homePage from '../pages/homePage';
import loginPage from '../pages/loginPage';
import productPage from '../pages/productPage';
import finalpage from '../pages/cartPage';
import loginByPass from '../pages/apiPage';
// const cred = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
// let loginToken;

let homeP, loginP, productP, cartP, loginAPI;



test.beforeEach(async ({ page }) => {

    // Created Instances for all
    homeP= new homePage(page);
    loginP= new loginPage(page);
    productP= new productPage(page);
    cartP= new finalpage(page);
    loginAPI = new loginByPass(page);


  });

test('Testcase 01: Login using API ',async({}) => {

  // loginAPI = new loginByPass(page);

// Login byPass with API
await loginAPI.loginByPass();

// Verify Logged In
await loginAPI.verifyLoggedIn();

  
});

test('Test case 02: Framework using Page Object Model', async ({}) => {
    
        
    //Visiting to site 
    await homeP.visitHomePage();

    //Verify the Page
    await homeP.verifyHomePage();

    //Clicking on Signup/Login Page    
    await homeP.clickLoginSignupButton();

    //Verify the heading of the Page
    await loginP.verifyLoginHeading();

    //Enter the Username and Password 
    await loginP.fillUsername();
    await loginP.fillPassword();

    // //Clicking on Login button
    await loginP.clickLoginButton();

    // //Verify the Logged as User
    await loginP.verifyLoggedIn();

    //Click on Product button
    await homeP.clickProductButton();

    // Search Product
    await productP.searchProductItem();

    //Verify Product
    await productP.verifyProduct();

    //Add searched Product to cart
    await productP.chooseProduct();

    //Verify Confirm Modal
    await productP.verifyConfirmationModal();

    //Click on Continue Shopping
    await productP.clickContinueShopping();

    //Click on Cart
    await homeP.clickCartButton();

    // Verify Cart elements
    await cartP.verifyCartElements();
    

    //Verify Added Products
    await cartP.verifyAddedProduct();

    //Remove Added Product
    await cartP.removeProduct();

    //Verify Empty Cart
    await cartP.verifyEmptyCart();

    //Clicking on Logout Button available in Login page for Logged in User
    await loginP.clickLogoutButton();


});

test.afterEach(async ({page})=>{

  // Closing page 
  await page.close();
  });
