// Import expect assertion library from Playwright
import { expect } from "@playwright/test";

//Class CustomActions
class CustomActions {
    constructor(page) {
      this.page = page;
      // this.element= element;
    }
  
    /**customGoto method for navigating site
    taking @url as parameter
    */
    async customGoto(url) {
      await this.page.goto(url);
  
    }

    /**customClick method for Click action
    taking @element as parameter for locator
    */
    async customClick(element) {
      await element.click({force:true});
    }
  
    /**custom type method for type action(enter characters one by one)
    taking two parameter @element as locator and @text as string
    */
    async customType(element,text) {
      await element.type(text);

    }

    /**customFill method for fill action(enter characters in one step)
    taking two parameter @element as locator and @text as string
    */
    async customFill(element,text) {
        await element.fill(text);
      }
  
    /**customClear method for Clear action
    taking @element as parameter for locator
    */
    async customClear(element) {
      await element.clear();
 
    }
  
    /**customHover method for mouse hovering action
    taking @element as parameter for locator
    */
    async customHover(element) {
      await element.hover();

    }
  
    /**customVisible for assertion that element is visible by
    taking @element as parameter for locator
    */    
    async customVisible(element) {
      await expect(element).toBeVisible();
      console.log("Verified Element is Visible");

    }

    /**customNotVisible for assertion that element is not visible by
    taking @element as parameter for locator
    */    
    async customNotVisible(element) {
      await expect(element).not.toBeVisible();
      console.log("Verified Element is Not Visible");

    }

    /**customToBeDisabled for assertion that element is visible by
    taking @element as parameter for locator
    */    
    async customToBeDisabled(element) {
      await expect(element).toBeDisabled();
      console.log("Verified Element is Disabled");

    }    

    /**customContainText method for assertion that element contains text by
    taking @element as parameter for locator
    In this method first it store the text in @elementText as string and compares with @Text passed as parameter
    */    
    async customContainText(element,text) {
        const elementText = await element.textContent();
        expect(elementText).toContain(text);
        console.log('Verified the Text');
    }

    // async customLocator(element){
    //   this.page.element
    // }

  }
  
  //Export customActions
  export default CustomActions;
  