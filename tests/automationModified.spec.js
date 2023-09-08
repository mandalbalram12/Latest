//Import all page and test method
import { test } from '@playwright/test';
import homePage from '../pages/homePageModified';
import loginPage from '../pages/loginPageModified';
import productPage from '../pages/productPageModified';
import cartPage from '../pages/cartPageModified';

let homeP, loginP, productP, cartP;



test.beforeEach(async ({ page }) => {

  // Created Instances for all
  homeP= new homePage(page);
  loginP= new loginPage(page);
  productP= new productPage(page);
  cartP= new cartPage(page);

    //Visiting to site 
    await homeP.visitHomePage();
  });

test('Test case: Framework using Page Object Model', async () => {
    
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




});
test.afterEach(async ({page}) => {

    //Clicking on Logout Button available in Login page for Logged in User
    await loginP.clickLogoutButton();

    await page.close();
  });