import { BasePage } from "./base.page";

export class HomePage extends BasePage{

    private readonly favButton = 'favorite-btn';
    
    visit(){
        super.visit('/');
    }

    clickFavButton(){
        cy.get(this.favButton).first().click();
    }
}

