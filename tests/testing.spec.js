// @ts-check
const { test} = require('@playwright/test');
import loginObj from '../pagesClickup/dummy';

test('Fetching the Locator', async ({}) => {

  // const login = new loginPage01(page);
  
  await loginObj.navigate();
  await loginObj.enterCredentials();

});
