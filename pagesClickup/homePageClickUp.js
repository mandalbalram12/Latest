//Import CustomActions
import CustomActions from "../webElementActions";
import userData from "../data";

//Inherit the CustomAction property
class HomePage extends CustomActions{
    constructor(page){

        /** All required element's locator in HomePage */ 
        super();
        this.page = page;
        this.homeButton = page.getByRole('link',{name:'Home'});
        this.favouriteSection = page.getByRole('button',{name:'FAVORITES'});
        this.dashboardSection = page.locator('[data-test="accordion__toggle-side-drawer__collapsed"]');
        this.spaceSection = page.locator('[data-test="simple-bar__spaces__true"]');
        this.favoriteOptions = page.locator('[data-test="nav-favorites__list"]');
        this.selectedFavoriteOption = page.locator('//div //button //cu-editable');
        
    }

    //Verify the homeButton
    async verifyHomePage() {
        await this.customVisible(this.homeButton);
    }

    //Click on favourite section
    async clickFavoriteSection(){
      await this.customClick(this.favouriteSection);
    }

    //Click on Project 01 option available in favourite section
    async clickProject02(){
      await this.customClick(this.favoriteOptions.filter({hasText:'Project 2'}));
      await this.customVisible(this.selectedFavoriteOption);
    }

    //verify selected favorite Option
    async verifySelectedFavoriteOPtion(){
        await this.customContainText(this.selectedFavoriteOption,'Project 2')
        

    }
    }
  //Export homepage Class
  export default HomePage;

  