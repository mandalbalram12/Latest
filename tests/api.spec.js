const { test, request } = require('@playwright/test');
// const { webAPI } = require('../Pages/webAPI');

const cred = {
  email: 'anshika@gmail.com',
  password: 'Iamking@000',
};

let loginToken;

/*test.beforeAll(async ({}) => {
  const apiContext = await request.newContext();

  // Encode the username and password for Basic Authentication
  const authHeader = `Basic ${Buffer.from(
    `${cred.email}:${cred.password}`
  ).toString('base64')}`;

  const loginResponse = await apiContext.post(
    'https://app.clickup.com/auth/v1/login?include_teams=true&recaptchaV3=03AFcWeA6L-TqxFBnAirCb97oiILz8VGcfbGm7t6fXfmaYWpjtNctPCdt6aQtoypMzM77UkuQN9sUg8g7eE8c5A7OR3UziliWshA-xF39nrMVqiSJDUCMJTF3Cs99PIMiw0Wx9B1CHwUbg53G54qxOcYY89HwVTTcoca6J_we1qPv711UfW0a5Ki23Za3ju4uj3YbSL_0ArkyJQXKle_DdUq1oDmJiIUxULekCnhycoeQxfQunUNdWllH5aA3H408LvrxIchrEdcOpajCFweveKAayzn6QvqRo2GLYILMqwqu-QSMA1YUngjJpYAQAn2PImv-lJ--a_ljWu3T9CeOAUC4E4R2zqBaeWIjH56UvFgAOYpWcbAahy2myYtDCYngH0l5XaHb1ID1zE1rkBfggmk3WPpBhOH2LrHuAkZcVK9PT6_4-s7xTzcFZOQTpYK2MdNJgMQaRkk-fkDeoIbUDtaG3FCHlWEH7gXUlh7gtgcWhV1RqK-X_SMpIPZl9Iwng3F8YPB_D7BX5aXSarPac_VkXyRAn9qRgJckuTM3DTfaEQ1qxe3LpyhA',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader, // Include Basic Authentication header
      },
      json: cred,
    }
  );

  if (!loginResponse.ok()) {
    const responseText = await loginResponse.text();
    throw new Error(
      `Login request failed with status ${loginResponse.status()}. Response: ${responseText}`
    );
  }

  const loginJSONResp = await loginResponse.json();
  loginToken = loginJSONResp.token;
  console.log('Token is:', loginToken);
});
*/


test('Test login', async ({ page }) => {

    const apiContext = await request.newContext();

    // Encode the username and password for Basic Authentication
    const authHeader = `Basic ${Buffer.from(
      `${cred.email}:${cred.password}`
    ).toString('base64')}`;
  
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader, // Include Basic Authentication header
        },
        json: cred,
      }
    );
  
    if (!loginResponse.ok()) {
      const responseText = await loginResponse.text();
      throw new Error(
        `Login request failed with status ${loginResponse.status()}. Response: ${responseText}`
      );
    }
  
    const loginJSONResp = await loginResponse.json();
    loginToken = loginJSONResp.token;
    console.log('Token is:', loginToken);
  
  if (!loginToken) {
    throw new Error('Token is undefined');
  }

//   const wA = new webAPI(page);

  await page.addInitScript((token) => {
    localStorage.setItem('token', token);
    console.log(page.title());
  }, loginToken);


  await page.goto("https://rahulshettyacademy.com/client");
  console.log(`Title : ${await page.title()}`)
  await page.screenshot({path:'fullpage.png', fullPage:true});

});
