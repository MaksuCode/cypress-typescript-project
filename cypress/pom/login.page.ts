class LoginPage {

    private readonly username = '#username';
    private readonly password = '#password';
    private readonly submitButton = '#submit';
    private readonly errorMessage = '#error';
  
    visit() {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
      return this;
    }
  
    fillUserName(email: string) {
      cy.get(this.username).type(email);
      return this;
    }
  
    fillPassword(password: string) { 
      cy.get(this.password).type(password);
      return this;
    }
  
    clickSubmitButton() {
      cy.get(this.submitButton).click();
      return this;
    }

    checkErrorMessage(message : string){
        cy.get(this.errorMessage).should('be.visible');
        cy.get(this.errorMessage).should('have.text', message)
        return this;
    }
  
    login(username: string, password: string) {
      this.fillUserName(username);
      this.fillPassword(password);
      this.clickSubmitButton();
    }
  }
  
  export default new LoginPage();
  