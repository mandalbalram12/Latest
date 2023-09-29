//Import all page and test method
import { test} from '@playwright/test';
import homePageObject from '../pages/class';
// import {homePageObject} from '../pages/class';
// import loginPage from '../pages/authenticationPage';
// import productPage from '../pages/productPage';
// import finalpage from '../pages/cartPage';
// import loginByPass from '../pages/apiPage';
// import homePage from '../pages/class';



test('Test case 02: Framework using Page Object Model', async ({page}) => {

  // const homePageObject = new homePage(page);
    
        
    //Visiting to site 
    await homePageObject.visitHomePage();

    //Verify the Page
    await homePageObject.verifyHomePage();

    //Clicking on Signup/Login Page    
    await homePageObject.clickLoginSignupButton();



});

test.afterEach(async ({page})=>{

  // Closing page 
  await page.close();
  });
