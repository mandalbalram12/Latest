// Import expect assertion library from Playwright
import {expect } from "@playwright/test";

// import page

//Class CustomActions
class CustomActions {
    constructor(page) {
      this.page = page;
    }
  
   /**
    * navigate method for navigating site
    * @param {string} url 
    */
    async navigate(url) {
      // await this.page.goto(url);
      await this.page.goto(url);
  
    }


   /**
    * clickOnElement method for Click action
    * @param {*} element 
    * @param {boolean} force parameter to force the click
    */
    async clickOnElement(element,force = false) {
      const options = force ? { force: true } : undefined;
      await element.click(options);
    }
  
  
   /**
    *typeOnElement method for type action(enter characters one by one)
    * @param {*} element 
    * @param {string} text 
    */
    async typeOnELement(element,text) {
      await element.type(text);

    }

   /**
    * fillOnElement method for fill action(enter characters in one step)
    * @param {*} element 
    * @param {string} text 
    */
    async fillOnElement(element,text) {
        await element.fill(text);
      }
  

   /**
    * clearOnElement method for Clear action
    * @param {*} element 
    */
    async clearOnElement(element) {
      await element.clear();
 
    }
  
    /**
     *hoverOnElement method for mouse hovering action
     * @param {string} element 
     */
    async hoverOnElement(element) {
      await element.hover({TimeRanges:20000});

    }
     
   /**elementVisible for assertion that element is visible
    * @param {string} element 
    */
    async elementVisible(element) {
      await expect(element).toBeVisible();
      console.log("Verified Element is Visible");

    }
 
   /** elementNotVisible for assertion that element is not visible
    * @param {string} element 
    */  
    async elementNotVisible(element) {
      await expect(element).not.toBeVisible();
      console.log("Verified Element is Not Visible");

    }

   /** elementToBeDisabled for assertion that element is disable
    *  @param {string} element 
    */  
    async elementToBeDisable(element) {
      await expect(element).toBeDisabled();
      console.log("Verified Element is Disabled");

    }    
   
    /** containText method for assertion that element contains text by
     * @param {string} element, In this method first it store the text in @elementText as string and compares with
     * @param {string} text 
     */
    async containText(element,text) {
        const elementText = await element.textContent();
        expect(elementText).toContain(text);
        console.log('Verified the Text');
    }

    /**
     * elementToBeTruthy to check the value returns true 
     * @param {string} element 
     */
        async elementToBeTruthy(element) {
          await expect(element).toBeTruthy();
      }


      /**
       * getTitle method to fetch the title of the page
       */
      async getTitle(){
        await this.page.title();
        console.log("Title of the page is",await this.page.title());
      
      }


  }
  
  //Export customActions
  export default CustomActions;

  