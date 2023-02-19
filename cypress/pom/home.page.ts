class HomePage{

    private readonly logOutButton = '.wp-block-button__link';

    validateUrl(){
        cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
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
