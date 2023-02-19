import { BasePage } from "./base.page";

export class SignInPage extends BasePage{

    private readonly title = '.text-xs-center.ng-binding';
    private readonly registerLink = 'p.text-xs-center > [ui-sref="app.register"]';
    private readonly email = ':nth-child(2) > .form-control';
    private readonly password = ':nth-child(3) > .form-control';
    private readonly signInButton = '.btn';
    private readonly errorMessage = 'div.ng-scope > .ng-binding';
  
    visit() {
      super.visit('/login');
      return this;
    }

    login(email: string, password: string) {
      this.fillEmail(email);
      this.fillPassword(password);
      this.clickSignInButton();
    }

    checkTitle(text : string){
      cy.get(this.title).should('have.text', text);
    }

    clickRegisterLink(){
      cy.get(this.registerLink).click();
    }

    checkRegisterLink(text : string, link : string){
      super.checkHrefLink(this.registerLink, text, link);
    }

    checkEmailPlaceholder(placeholder : string) {
      super.checkPlaceHolderValue(this.email, placeholder);
    }

    checkPaswordPlaceholder(placeholder : string) {
      super.checkPlaceHolderValue(this.password, placeholder);
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

  }
  
  