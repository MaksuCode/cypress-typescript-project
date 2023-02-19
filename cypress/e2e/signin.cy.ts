import signInPage from "cypress/pom/signin.page";
import homePage from "cypress/pom/home.page";


describe('Given user is on Sign In page', () => {

  beforeEach(() => {
    signInPage.visit();
  })

  it('should successfuly login with valid credentials', () => {
    signInPage.login('mustafaksu4@gmail.com', '123456');
    // Add assertion here
  })

  it('should show \'Need and account?\' text', () => {
    signInPage.checkRegisterLink();
  })

  it('should have Email placeholder on email input field', () => {
    signInPage.checkEmailPlaceholder();
  })

  it('should have Password placeholder on password input field', () => {
    signInPage.checkPaswordPlaceholder();
  })


  it('should redirect to Sign Up page when register link is clicked', () => {
    signInPage.clickRegisterLink();
  })

  it.skip('should show an error message when email format is wrong', () => {
    signInPage
    .fillEmail('incorrect_format_emailgmail.com')
    .fillPassword('111111')
    .clickSignInButton()
    .checkErrorMessage('email or password is invalid');
 })

 it('should show error message when email is not correct', () => {
   signInPage
   .fillEmail('incorrect_email@gmail.com')
   .fillPassword('111111')
   .clickSignInButton()
   .checkErrorMessage('email or password is invalid');
 })

  it('should show error message when password is not correct', () => {
    signInPage
    .fillEmail('mustafaksu4@gmail.com')
    .fillPassword('incorrect_password')
    .clickSignInButton()
    .checkErrorMessage('email or password is invalid');
  })

})