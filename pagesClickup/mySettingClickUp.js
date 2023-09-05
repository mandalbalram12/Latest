//Import CustomAction
import CustomActions from "../webElementActions";

//Inherit customAction property
class mySetting extends CustomActions{

    constructor(page){

        super();
        this.page = page;
        /** All required Elements in mysetting page*/
        this.fullname = page.getByPlaceholder('Enter Username');
        this.email = page.getByPlaceholder('Enter Email');
        this.passwordtext = page.getByPlaceholder('Enter New Password');
        this.authenticate = page.getByRole('heading', {name: 'Two-factor authentication (2FA)'});
        this.textmessage = page.getByRole('heading', {name: 'Text Message (SMS)'});
        this.authapp = page.getByRole('heading', {name: 'Authenticator App (TOTP)'});
        this.savechanges = page.getByRole('button', {name: 'Save changes'});
        this.colorfullname = page.locator('.cu-form__label');
        this.highlightfullnameWarning = page.locator('.cu-form__error-text');
        this.savechanges = page.locator('[data-test="profile-settings-btn__save-changes"]');
        this.updatename = page.locator('[data-test="clickup-verified__sssss"]');
        this.saved = page.locator('[data-test="profile-settings__btn_fw"]');
        this.auth = page.locator('[data-test="toggle-switch"]');
        this.passtext = page.getByRole('heading', {name: 'Enter your password to setup 2FA'});
        this.confirmpass = page.getByRole('button', {name: 'Confirm Password'});
        this.close = page.getByRole('button', {name: 'Close'});
        this.edittext = page.getByPlaceholder('••••••');
        this.show = page.getByRole('link', {name: 'Show'});
        this.hide = page.getByRole('link', {name: 'Hide'});
        this.cleartext = page.getByPlaceholder('••••••');
        this.reqtext = page.locator('.cu-form__error-text');
        this.closetest = page.getByRole('button', {name: 'Close'});

    }


   // Verify the textbox for Fullname, Email and Password.
    async verifyFullName(){
        await this.customVisible(this.fullname);
      
    }

   // Verify the textbox for Email
    async verifyEmail(){

        await this.customVisible(this.email);

    }

   // Verify the textbox for Password.
    async verifyPasswordText(){
    
        await this.customVisible(this.passwordtext);
    }

   // Verify the Two Factor Authenticator option should available and by default toggled off
    async verifyAuthenticate(){

        await this.customVisible(this.authenticate);

    }

   // Verify the Text Message 
    async verifyTextMessage(){

        await this.customVisible(this.textmessage);
    }

   // Verify the Authicator App
    async verifyAuthApp(){

        await this.customVisible(this.authapp);
    }

   // verify the Save button should available
    async verifySaveChanges(){
        
        await this.customVisible(this.savechanges);
    }

   // Clear the Full name text box and clear the name
    async clearFullName(){
        
        await this.customClear(this.fullname);
    }

   //  Verify the Full name is highlighted.
    async verifyColorFullName(){
        
        await this.customVisible(this.colorfullname.first());
    }

   // Verify the warning message should display "This field is required"
    async verifyHighFullNameWarning(){
        
        await this.customVisible(this.highlightfullnameWarning);
    }

   // Enter the new value in Full name textbox 
    async enterFullName(){
        
        await this.customType(this.fullname,'sssss')
    }

   // Click on Save button
    async clicksavechanges(){
        
        await this.customClick(this.savechanges)
    }

   // Verify the Name should update below user icon.
    async verifyUpdateName(){
        
        await this.customVisible(this.updatename);
    }

   // Verify the Save button should disable and Save text change to Saved. 
    async clickSaved(){
        
        await this.customToBeDisabled(this.saved)
    }

   // Toggle on for Authenticator app.
    async clickauth(){

        await this.customClick(this.auth.last());
        
    }
 
   // Verify the 2FA modal should open with description "Enter your password to setup 
    async verifyPassText(){
        
        await this.customVisible(this.passtext);
    }

   // Verify the Show, Confirm password and Close button should available.
    async verifyConfirmPass(){
        await this.customVisible(this.confirmpass);
    }

   // Enter the value in textbox 
    async verifyClose(){
        
        await this.customVisible(this.close);
    }

   // Verify the entered text is encryted 
    async clickEditText(){
        await this.customType(this.edittext,'123456')
    }

   // Click on Show button 
    async clickMyShow(){
        await this.customClick(this.show);
    }

   // Verify the entered text should visible and hide button should visible
    async clickHide(){
        await this.customClick(this.hide);
    }

   // Cleared the entered text and click in modal 
    async onClearText(){
        await this.customClear(this.cleartext);
    }

   // Verify the Confirm passowrd should highlight and warning message should open "Password required' 
    async clickConfirmPass(){
        await this.customClick(this.confirmpass);
    }

   // Verify the warning message should open "Password required' 
    async verifyReqText(){
    
        await this.customVisible(this.reqtext);
    }

   // Click on X & Verify the Modal should close 
    async clickClose(){
        await this.customClick(this.close)
        await this.customNotVisible(this.close);
    }


}
// Export mySetting class  
export default mySetting;
