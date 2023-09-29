//Import all page and test method
import { test} from '@playwright/test';
import homePage from '../pages/homePage';
import loginPage from '../pages/authenticationPage';
import productPage from '../pages/productPage';
import finalpage from '../pages/cartPage';
import loginByPass from '../pages/apiPage';
import userData from '../data';
// import homePageObject from '../pages/class';

let loginPageObject, productPageObject, cartPageObject, loginAPIObject;
let homePageObject;



test.beforeEach(async ({ page }) => {

    // Created Instances for all
    loginPageObject= new loginPage(page);
    productPageObject= new productPage(page);
    cartPageObject= new finalpage(page);
    loginAPIObject = new loginByPass(page);
    homePageObject = new homePage(page)


  });

test('Testcase 01: Bypass login functionality using API ',async({page}) => {

// Handle uncaught exceptions using page.on
  page.on('pageerror', (error) => {
    console.error('Uncaught exception in Testcase 02:', error);
    throw error;
    });  

// Login byPass with API
await loginAPIObject.loginByPass();

// Verify Logged In
await loginAPIObject.verifyLoggedIn();

  
});

test('Test case 02: Verify cart functionality', async ({page}) => {

    // Handle uncaught exceptions using page.on
    page.on('pageerror', (error) => {
      console.error('Uncaught exception in Testcase 02:', error);
      throw error;
      });

    //Visiting to site 
    await homePageObject.visitHomePage();

    //Verify the Page
    await homePageObject.verifyHomePage();

    //Clicking on Signup/Login Page    
    await homePageObject.clickLoginSignupButton();

    //Verify the heading of the Page
    await loginPageObject.verifyLoginHeading();

    //Enter the Username and Password 
    await loginPageObject.fillUsername(userData);
    await loginPageObject.fillPassword(userData);

    // //Clicking on Login button
    await loginPageObject.clickLoginButton();

    // //Verify the Logged as User
    await loginPageObject.verifyLoggedIn();

    //Click on Product button
    await homePageObject.clickProductButton();

    // Search Product
    await productPageObject.searchProductItem();

    //Verify Product
    await productPageObject.verifyProduct();

    //Add searched Product to cart
    await productPageObject.chooseProduct();

    //Verify Confirm Modal
    await productPageObject.verifyConfirmationModal();

    //Click on Continue Shopping
    await productPageObject.clickContinueShopping();

    //Click on Cart
    await homePageObject.clickCartButton();

    // Verify Cart elements
    await cartPageObject.verifyCartElements();
    

    //Verify Added Products
    await cartPageObject.verifyAddedProduct();

    //Remove Added Product
    await cartPageObject.removeProduct();

    //Verify Empty Cart
    await cartPageObject.verifyEmptyCart();

    //Clicking on Logout Button available in Login page for Logged in User
    await loginPageObject.clickLogoutButton();


});

test.afterEach(async ({page})=>{

  // Closing page 
  await page.close();
  });
