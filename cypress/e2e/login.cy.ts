import loginPage from "cypress/pom/login.page";
import homePage from "cypress/pom/home.page";


describe('Given user is on login page', () => {

  beforeEach(() => {
    loginPage.visit();
  })

  it('should login with valid credentials', () => {

    loginPage
    .fillUserName('student')
    .fillPassword('Password123')
    .clickSubmitButton();

    homePage
    .validateUrl()
    .validateMessage();

  })

  it('should show error message when username is not valid', () => {
    
    loginPage
    .fillUserName('incorrectUser ')
    .fillPassword('Password123')
    .clickSubmitButton()
    .checkErrorMessage('Your username is invalid!');

  })

  it('should show error message when password is not valid', () => {
    
    loginPage
    .fillUserName('student')
    .fillPassword('incorrectPassword ')
    .clickSubmitButton()
    .checkErrorMessage('Your password is invalid!');

  })

})