class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    // Define a locator using an arrow function
    usernameInputLocator = () => this.page.locator('#username');
    passwordInputLocator = () => this.page.locator('#password');
    loginButtonLocator = () => this.page.locator('button[type="submit"]');
  
    async login(username, password) {
      await this.usernameInputLocator().type(username);
      await this.passwordInputLocator().type(password);
      await this.loginButtonLocator().click();
    }
  }
  
  // Usage
  const { chromium } = require('playwright');
  
  (async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com/login');
    
    const loginPage = new LoginPage(page);
    await loginPage.login('your-username', 'your-password');
    
    // Rest of your testing logic
  })();
  