import { test } from '@playwright/test';
import homePage from '../pages/homePage';
import loginPage from '../pages/loginPage';
import productPage from '../pages/productPage';
import cartPage from '../pages/cartPage';



test.beforeEach(async ({ page }) => {

  const homeP= new homePage(page);

    //Visiting to site 
    await homeP.visitHomePage();
  });

test('Test case: using Page Object Model', async ({ page }) => {

    const homeP= new homePage(page);
    const loginP= new loginPage(page);
    const productP= new productPage(page);
    const cartP= new cartPage(page);

    //Verify the Page
    await homeP.verifyHomePage();

    //Clicking on Signup/Login Page    
    await homeP.clickLoginSignupButton();

    //Verify the heading of the Page
    await loginP.verifyLoginHeading();

    //Enter the Username
    await loginP.fillUsername();
      // .fillpassword()
      // .clickloginBtn();
    
      

    // // //Enter the password
    await loginP.fillPassword();
    //   .clickloginBtn();

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
test.afterEach(async ({ page }) => {

    const loginP= new loginPage(page);
    //Clicking on Logout Button available in Login page for Logged in User
    await loginP.clickLogoutButton();

    await page.close();
  });