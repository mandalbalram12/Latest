//Import all pages and test 
import LoginPage from '../pagesClickup/loginClickUp';
import Filter01 from '../pagesClickup/filter01';
import HomePage from '../pagesClickup/homePageClickUp';
import userSetting from '../pagesClickup/userSettingClickUp';
import mySetting from '../pagesClickup/mySettingClickUp';
import {test} from '@playwright/test';
let loginC,homeC,filter01,userSet,addingC;

test.beforeEach(async ({ page }) => {

  loginC = new LoginPage(page);
  homeC = new HomePage(page);
  filter01 = new Filter01(page);
  userSet = new userSetting(page);
  addingC = new mySetting(page);

  //Navigating to ClickUp
  await loginC.navigate();

  //Click to Login link
  await loginC.clickLoginLink();

  //Enter Username and Password
  await loginC.enterCredential();

  //Click on Login Button
  await loginC.clickSubmitButton();

  //Verify the user is Logged in Successfully
  await homeC.verifyHomePage();


});


test('TestCase01: @Smoke Verify the Filter functionality', async () => {

  // homeC = new HomePage(page);
  // filter01 = new Filter01(page);
  

  // Click on Favourites Section
  await homeC.clickFavoriteSection();

  //Select favourite Option
  await homeC.clickProject02();

  //Verify the Selected Favourite Option
  await homeC.verifySelectedFavoriteOPtion();

  //Click on Filter
  await filter01.clickFilter();


  //Verify filter Modal
  await filter01.verifyfiltermodal()

  //Search Status and select on Filter search box
  await filter01.searchStatus()


  //Click on Select option Dropdown
  await filter01.clickSelectOptionDropdown()

  //Select status as Active
  await filter01.selectActiveStatus()

  //Confirm Button
  await filter01.clickConfirmButton()

  //Click on Close Button available in filter Modal
  await filter01.clickonX()

  //Verify only Active status
  await filter01.verifyTodoInprogress()

  //Click on Filter
  await filter01.clickFilter();

  //Clear Filter Setting
  await filter01.clearFiltersetting();

  //Click on Close Button available in filter Modal
  await filter01.clickonX() 
  
  //Click on Filter
  await filter01.clickFilter();


  //Search Status and select on Filter search box
  await filter01.searchStatus()

    //Click on Select option Dropdown
    await filter01.clickSelectOptionDropdown()
 
  //Select status as Closed
  await filter01.selectClosedStatus()

  //Confirm Button
  await filter01.clickConfirmButton()

  //Click on Close Button available in filter Modal
  await filter01.clickonX()

  //Verify only Close status
  await filter01.verifyClosed()

  //Click on filter
  await filter01.clickFilter();

  //Clear Filter Setting
  await filter01.clearFiltersetting();
  


});

test.skip('TestCase02: @Regression Verify the user icon avatar and space color setting', async () => {


  // userSet = new userSetting(page);

  //Click on dropdown button available at left bottom
  await userSet.clickDropdownButton();

  //Click on mysetting 
  await userSet.clickMySetting();

  //Verify the My setting page after clicking to mysetting
  await userSet.verifyMysettingHeading(); 

  //Verify the user profile icon
  await userSet.verifyProfileIcon();   

  //Click on profile icon
  await userSet.clickProfileIcon();

  //Verify the Space color or Modal
  // await userSet.VerifySpaceColor();
  
  //Click on color
  await userSet.clickAddColor();

  //Verify the added Color
  await userSet.verifyAddColor();

  //Again click on Profile icon
  await userSet.clickProfileIcon();

  //Click on Add custom Avatar
  await userSet.clickAddCustomAvatar();

  //Verify the attachment Modal
  await userSet.VerifyImageModal();

  //Verify the upload Button
  await userSet.verifyUploadButton();

  //Upload the image 
  await userSet.verifyImageUpload();

  //Click on save button
  await userSet.clickSaveButton();


});

test('Testcase03: @Smoke Verify the personal info', async () => {

  // addingC = new mySetting(page);
  // userSet = new userSetting(page);

  //Click on dropdown button available at left bottom
  await userSet.clickDropdownButton();

  //Click on mysetting 
  await userSet.clickMySetting();

  //Verify the My setting page after clicking to mysetting
  await userSet.verifyMysettingHeading(); 

  //Verify the Full Name textbox
  await addingC.verifyFullName();

  //Verify the Email textbox
  await addingC.verifyEmail();

  //Verify the Password Text
  await addingC.verifyPasswordText();

  //Verify the Authenticate
  await addingC.verifyAuthenticate();

  // Verify the Text Message
  await addingC.verifyTextMessage();

  //Verify the Auth App
  await addingC.verifyAuthApp();

  //Verify the Save Changes 
  await addingC.verifySaveChanges();

  //Click on Full name Textbox
  await addingC.clearFullName();

  //Verify the Highlight Color on Fullname
  await addingC.verifyColorFullName();

  //Verify the Highlight error on full name
  await addingC.verifyHighFullNameWarning();

  //Enter new Full name
  await addingC.enterFullName();

  //Verify the Full name color
  await addingC.verifyColorFullName();

  //Click on Save Button
  await addingC.clicksavechanges();
  
  //Verify the Update name on Profile
  await addingC.verifyUpdateName();
  
  //Verify the Click Button should be disable
  await addingC.clickSaved();
  
  //Toggle on Auth
  await addingC.clickauth();
  
  //Verify the Password Text
  await addingC.verifyPassText();
  
  //Verify the Confirm Password
  await addingC.verifyConfirmPass();
  
  //Verify the Close Button
  await addingC.verifyClose();
  
  //ENter new value on Passowrd text 
  await addingC.clickEditText();
  
  //Click the Show button
  await addingC.clickMyShow();
  
  //Click on Hide Button
  await addingC.clickHide();
  
  //Clear the TExt
  await addingC.onClearText();
  
  //Click on Confirm Password
  await addingC.clickConfirmPass();
  
  //Verify the required Text
  await addingC.verifyReqText();
  
  //Verify the Close button
  await addingC.clickClose();


});

