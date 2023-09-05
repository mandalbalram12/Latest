// @ts-check
const { test} = require('@playwright/test');
import loginPage01 from '../pagesClickup/dummy';

test('Fetching the Locator', async ({ page }) => {

  const login = new loginPage01(page);
  
  await login.Naviagte();
  await login.enterCredentials();

});
