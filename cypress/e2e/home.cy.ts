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


    it.skip('should increase the fav count on the post when a logged in user click fav button', () => {
        cy.login('mustafaksu4@gmail.com', '123456');
        
        cy.window().then((win) => {
            const authToken = win.localStorage.getItem('jwtToken');
            cy.deleteFav('Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863', authToken || '');
          });
          
        homePage
        .clickFavButton()
        .checkFavCountIncrement('514');
    })



})