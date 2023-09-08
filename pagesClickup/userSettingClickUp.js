//import customAction class to access methods
import CustomActions from "../webElementActions";
import { expect } from "@playwright/test";
class userSetting extends CustomActions{

    constructor(page){
        
        super();
        this.page = page;
        /** Required Elements in user Setting page */
        this.dropdownButton = page.locator('[data-test="user-settings-dropdown-toggle"]',{ timeout: 60000 });
        this.mySetting = page.getByRole('link', {name: 'My Settings'});
        this.headingMySetting = page.getByRole('heading', {name: 'My Settings'},{ timeout: 60000 });
        this.profileIcon = page.locator('[data-test="profile-settings__empty"]');
        this.spaceColor = page.locator('.cu-dropdown-list-title.cu-avatar-picker__title');
        this.addcolor = page.locator('[data-test="avatar-color-option-#dc646a"]');
        this.modalspacecolor = page.getByRole('heading', {name: 'My Settings'});
        this.addedColor = page.locator('[data-test="profile-settings__empty"]');
        this.addCustomAvatar = page.locator('[data-test="avatar-picker__uploader-trigger"]');
        this.attachmentModal = page.locator('[data-test="modal__dialog"]');
        this.uploadButton = page.locator('.cu-modal__text');
        this.clickSave = page.getByRole('button',{name:'Save'});
        this.verifyImage = page.getByRole('img', {name: 'IMG20230727133749.jpg'});
        this.logoutButton = page.locator('[data-test="user-settings-menu-item-log-out"]');
    }

    //Click on Dropdown Button
    async clickDropdownButton(){
        
        
        await this.customClick(this.dropdownButton);
    }

    //Click on My Setting
    async clickMySetting(){
        
        await this.customClick(this.mySetting);
    }

    //Verify the My setting Page
    async verifyMysettingHeading(){
        await this.customVisible(this.headingMySetting);
    }

    //Verify the Profile icon is visible
    async verifyProfileIcon(){

        await this.customVisible(this.profileIcon);
    }

    //Click on Profile Icon
    async clickProfileIcon(){
        
        await this.customClick(this.profileIcon);
    }

    //Verify the Space Color
    async VerifySpaceColor(){
        await this.customVisible(this.spaceColor);

    }

    //Click on Add color
    async clickAddColor(){

        await this.customClick(this.addcolor);
    }

    //Verify the Space Color Modal is disappear
    async VerifySpaceColorModal(){
        await this.customNotVisible(this.modalspacecolor);

    }

    //Verify the Added Color
    async verifyAddColor(){
        //await this.customToHaveCSS(this.addcolor,'background-color','rgba(0, 0, 0, 0)');
        await expect(this.addcolor).toHaveCSS('background','rgb(220, 100, 106)');

    }

    //Click on profile Icon
    async clickProfileIcon(){
    
        await this.customClick(this.profileIcon);
    }

    //click on Add Custom Avatar
    async clickAddCustomAvatar(){
        
        await this.customClick(this.addCustomAvatar);
    }

    //Verify the Attachment Modal
    async VerifyImageModal(){
        await this.customVisible(this.attachmentModal);
    }

    //Verify the Upload Button
    async verifyUploadButton(){
        
        await this.customVisible(this.uploadButton);
    }

    //Click Upload Button
    async clickUpload(){
        
        await this.customClick(this.uploadButton);
    }

    //Upload Image as Attachment 
    async verifyImageUpload(){

        await this.uploadButton.setInputFiles('attachment/IMG20230727133749.jpg');
    }

    //Click on Save Button
    async clickSaveButton(){
        
        await this.customClick(this.clickSave.last());
    }

    //Verify the Upload Image
    async VerifyImgUpload(){
        
        await this.customVisible(this.verifyImage);

    }

    //Click on Logout Button
    async clickLogoutButton(){
        // await this.page.waitForLoadState('networkidle');
        await this.customClick(this.logoutButton);
    
    }
  }
 
 //Export userSetting Class 
  export default userSetting;
