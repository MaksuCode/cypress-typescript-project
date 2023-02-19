class SignInPage {

    private readonly registerLink = 'p.text-xs-center > [ui-sref="app.register"]';
    private readonly email = ':nth-child(2) > .form-control';
    private readonly password = ':nth-child(3) > .form-control';
    private readonly signInButton = '.btn';
    private readonly errorMessage = 'div.ng-scope > .ng-binding';
  
    visit() {
      cy.visit('/login');
      return this;
    }

    clickRegisterLink(){
      cy.get(this.registerLink).click();
    }

    checkRegisterLink(){
      cy.get(this.registerLink)
      .should('be.visible')
      .and('contain.text', 'Need an account?')
      .and('have.attr', 'href', '#!/register')
    }
  
    fillEmail(email: string) {
      cy.get(this.email).type(email);
      return this;
    }
  
    fillPassword(password: string) { 
      cy.get(this.password).type(password);
      return this;
    }
  
    clickSignInButton() {
      cy.get(this.signInButton).click();
      return this;
    }

    checkErrorMessage(message : string){
      cy.get(this.errorMessage)
      .should('be.visible')
      .and('contain.text', message);
      return this;
    }
  
    login(email: string, password: string) {
      this.fillEmail(email);
      this.fillPassword(password);
      this.clickSignInButton();
    }
  }
  
  export default new SignInPage();
  