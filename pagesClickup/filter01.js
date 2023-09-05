//Import CustomAction
import CustomActions from "../webElementActions";

//Inheriting the property of CustomActions
class Filter01 extends CustomActions{
    constructor(page){
        super();
        this.page= page;
        /** All required elements available */
        this.filterButton = page.locator('[data-test="filter-block__filter-button"]');
        this.modalFilter = page.locator('.cu-filter-value-list-dropdown__menu');
        this.searchBoxFilter = page.locator('[data-test="search-input__input"]');
        this.statusOption = page.locator('[data-test="filter-value-add-dropdown__item-Status"]');
        this.selectOptionDropdown = page.locator('.cu-status-filter__toggle.cu-dropdown__toggle');
        this.status = page.locator('.cu-checkbox__label.filter-type-block');
        this.confirmButton = page.locator('[data-test="status-filter__confirm-button"]');
        this.closeFilterModal = page.locator('[data-test="filter-value-list-dropdown__menu-close"]');
        this.statusHeader = page.locator('[data-test="group-header__header-status"]');
        this.clearFilter = page.locator('[data-test="filter-value__clear"]');

    }
  

    //Click on Filter
    async clickFilter() {
        await this.customClick(this.filterButton);
    }

    //Verify filter Modal
    async verifyfiltermodal() {

        await this.customVisible(this.modalFilter);

    }

    //Search Status and select on Filter search box
    async searchStatus(){

        await this.customFill(this.searchBoxFilter.nth(1),'Status');
        await this.customClick(this.statusOption);

    }

    //Click on Select option Dropdown
    async clickSelectOptionDropdown(){
        await this.customClick(this.selectOptionDropdown);
    }

    //Select status as Active
    async selectActiveStatus(){
    
        await this.customClick(this.status.first());
        
    }

    //Select status as Closed
    async selectClosedStatus(){
        await this.customClick(this.status.last());
    }

    //Confirm Button
    async clickConfirmButton(){
        await this.customClick(this.confirmButton);
    }

    //Click on Close Button available in filter Modal
    async clickonX(){
        await this.customClick(this.closeFilterModal);
    }

    //Verify only Active status
    async verifyTodoInprogress(){
        await this.customContainText(this.statusHeader.nth(1),'to do');
        await this.customContainText(this.statusHeader.first(),'in progress');
    }

    //Verify only Close status
    async verifyClosed(){
        await this.customContainText(this.statusHeader,'Complete');
    }

    //reset the filter
    async clearFiltersetting(){
        await this.customClick(this.clearFilter);
    }

}
    
  //Export filter01 class
  export default Filter01;

  