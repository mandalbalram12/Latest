// Import expect assertion library from Playwright
import { expect } from "@playwright/test";

//Class CustomActions
class CustomActions {
    constructor(page) {
      this.page = page;
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
      await element.click();
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
  
    /**
     *customHover method for mouse hovering action
     * @param {string} element 
     */
    async customHover(element) {
      await element.hover({TimeRanges:20000});

    }
     
   /**customVisible for assertion that element is visible
    * @param {string} element 
    */
    async customVisible(element) {
      await expect(element).toBeVisible();
      console.log("Verified Element is Visible");

    }
 
   /** customNotVisible for assertion that element is not visible
    * @param {string} element 
    */  
    async customNotVisible(element) {
      await expect(element).not.toBeVisible();
      console.log("Verified Element is Not Visible");

    }

   /** customToBeDisabled for assertion that element is disable
    *  @param {string} element 
    */  
    async customToBeDisabled(element) {
      await expect(element).toBeDisabled();
      console.log("Verified Element is Disabled");

    }    
   
    /** customContainText method for assertion that element contains text by
     * @param {string} element, In this method first it store the text in @elementText as string and compares with
     * @param {string} text 
     */
    async customContainText(element,text) {
        const elementText = await element.textContent();
        expect(elementText).toContain(text);
        console.log('Verified the Text');
    }


    async customToBeTruthy(element,text) {
      const elementText = await element.textContent();
      expect(elementText).toBeTruthy();
  }

  /**
   * customGetTitle method to fetch the title of the page
   */
  async customGetTitle(){
    await this.page.title();
    console.log("Title of the page is",await this.page.title());
   
}


  }
  
  //Export customActions
  export default CustomActions;
  