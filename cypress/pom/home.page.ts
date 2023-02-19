class HomePage{

    validateUrl(){
        cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
        return this;
    }

    validateMessage(){
        cy.get('strong').should('have.text', 'Congratulations student. You successfully logged in!');
        return this;
    }

}

export default new HomePage();
