class HomePage{

    private readonly logOutButton = '.wp-block-button__link';

    navigate(){
        cy.visit('/');
    }

    validateUrl(){
        cy.url().should('include', Cypress.env('URL'));
        return this;
    }

    validateMessage(){
        cy.get('strong').should('have.text', 'Congratulations student. You successfully logged in!');
        return this;
    }

    checkLogOutButton(){
        cy.get(this.logOutButton).should('be.visible');
        return this;
    }


}

export default new HomePage();
