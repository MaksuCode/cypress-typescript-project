import { BasePage } from "./base.page";

export class HomePage extends BasePage{

    private readonly favButton = 'favorite-btn';
    private readonly favButtonCount = 'favorite-btn ng-transclude';
    
    visit(){
        super.visit('/');
    }

    clickFavButton(){
        cy.get(this.favButton).first().click();
        return this;
    }

    checkFavCountIncrement(count : string){
        cy.get(this.favButtonCount).first().should('contain.text', count);
        return this;
    }

    
}

