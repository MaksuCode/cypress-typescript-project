import { HomePage } from "cypress/pom/home.page";

describe('Given user is on home page', () => {

    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visit();
    })

    it('should redirect user to sign up page when a not logged in user clicks fav button on post', () => {
        homePage.clickFavButton();
        cy.url().should('include', '#!/register')
    })



})