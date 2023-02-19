export class BasePage{

    visit(url : string){
        cy.visit(url);
    }

    checkPlaceHolderValue(locator : string, value : string){
        cy.get(locator)
        .should('have.attr', 'placeholder')
        .and('eq', value);
    }

    checkHrefLink(lcoator : string, text : string, link : string ){
        cy.get(lcoator)
        .should('be.visible')
        .and('contain.text', text)
        .and('have.attr', 'href', link)
    }

}

