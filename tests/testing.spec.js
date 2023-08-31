// @ts-check
const { test, expect } = require('@playwright/test');
const { default: userData } = require('../data');

test.skip('Fetching the Locator', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link',{name:' Signup / Login'}).click();
  await page.locator('[data-qa="login-email"]').fill(userData.username);
  await page.locator('[data-qa="login-password"]').fill(userData.password);
  await page.locator('[data-qa="login-button"]').click();
  await expect(await page.locator('//a//b')).toContainText('Mr Tester');

//   const userText= await page.locator('[xpath="1"]').textContent();
//   console.log('The target value:',userText);


});
