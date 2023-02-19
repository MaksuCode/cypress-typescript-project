import { HomePage } from "cypress/pom/home.page";

describe('Given user is on home page', () => {

    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visit();
    })

    it.skip('should redirect user to sign up page when a not logged in user clicks fav button on post', () => {
        homePage.clickFavButton();
        cy.url().should('include', '#!/register')
    })


    it('should increase the fav count on the post when a logged in user click fav button', () => {

        cy.login('mustafaksu4@gmail.com', '123456');

    })



})