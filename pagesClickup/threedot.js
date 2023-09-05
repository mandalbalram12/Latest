class Threedotmenu {
    clickonthreedot() {
        cy.get('[data-test="grid-layout-toolbar__options-ellipsis"]').click();
    }
  
    verifydropdownoptions() {
        cy.get('[data-test="dropdown-list-item__Rename"]').should('be.visible');
        cy.get('[data-test="dropdown-list-item__Duplicate"]').should('be.visible');
        cy.get('[data-test="dropdown-list-item__Remove from Favorites"]').should('be.visible');
        cy.get('[data-test="dropdown-list-item__Sharing & Permissions"]').should('be.visible');
        cy.get('[data-test="dropdown-list-item__Delete"]').should('be.visible');
    }
  
    clickonrename() {
        cy.get('[data-test="dropdown-list-item__Rename"]').click();
    }
  
    clickoutside() {
        cy.get('[data-pendo="dashboard__refresh"]').click();
    }

    removetext() {
        cy.get('[data-test="grid-layout-toolbar__input-text"]').click().clear().type('New Dashboard');
        
    }

    clickDuplicate() {
        cy.get('[data-test="dropdown-list-item__Duplicate"]').click();
    }

    clickDelete() {
        cy.get('[data-test="dropdown-list-item__Delete"]').click();

    }

    duplicatenotexist() {
        cy.findByRole('link',{name: "New Dashboard (1)"}).should('not.exist');
    }

    settodefaulttext(){

        // remove the text started with dashboard and add new title
        cy.get('[data-test="grid-layout-toolbar__input-text"]').click().clear().type('Testing 01');
    }

    verifyrenamedDashboard(){
        cy.contains('New Dashboard');
    }
  }


  
  export default new Threedotmenu();

  