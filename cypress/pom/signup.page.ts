import { BasePage } from "./base.page";

class SignUpPage extends BasePage{

    private readonly title = '.text-xs-center.ng-binding';
    private readonly singInLink = 'p.text-xs-center > [ui-sref="app.login"]';
    private readonly errorMessage = 'div.ng-scope > .ng-binding';
    private readonly username = '[ng-show="$ctrl.authType === \'register\'"] > .form-control';
    private readonly email = ':nth-child(2) > .form-control';
    private readonly password = ':nth-child(3) > .form-control';
    private readonly signUpButton = '.btn';

    fillInUsername(name : string){
        cy.get(this.username).type(name);
        return this;
    }

    fillEmail(email: string) {
        cy.get(this.email).type(email);
        return this;
      }
    
    fillPassword(password: string) { 
        cy.get(this.password).type(password);
        return this;
    }

    checkSignInLink(text : string, link : string){
        super.checkHrefLink(this.singInLink, text, link)
        return this;
    }

    checkUserNamePlaceholder(placeholder : string) {
        super.checkPlaceHolderValue(this.username, placeholder);
        return this;
    }
  
    checkEmailPlaceholder(placeholder : string) {
        super.checkPlaceHolderValue(this.email, placeholder);
        return this;
    }

    checkPaswordPlaceholder(placeholder : string) {
        super.checkPlaceHolderValue(this.password, placeholder);
        return this;
    }

}
