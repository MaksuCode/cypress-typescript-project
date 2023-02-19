/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable {
      login(email:string, pasword:string): void
      deleteFav(articleSlug:string, authToken:string) : void
    }
  }

  // This method can be used before test cases to bypass authentication
  Cypress.Commands.add('login', (email, password) => {
    console.log('Logging in via API call...')
    cy.request({
      method: 'POST',
      url: 'https://api.realworld.io/api/users/login',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=UTF-8'
      },
      body: {
        user: {
          email: email,
          password: password
        }
      }
    }).then((response) => {
      window.localStorage.setItem('jwtToken', response.body.user.token);
      console.log('jwtToken set : ' + response.body.user.token);
    });
    cy.reload();
  });


  Cypress.Commands.add('deleteFav', (articleSlug, authToken) => {
    cy.request({
      method: 'DELETE',
      url: `https://api.realworld.io/api/articles/${articleSlug}/favorite`,
      headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': `Token ${authToken}`
      },
      body: {}
    });
  });
  
  