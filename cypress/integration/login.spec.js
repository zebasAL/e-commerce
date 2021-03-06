import user from '../fixtures/user';
/// <reference types="cypress" />

describe('Login spec', () => {
  it('tests Login flow', () => {
    cy.visit('http://localhost:3000/');

    // go  to sign in page
    cy.get('#user-login-btn').click();
    cy.get('#login-btn').click();

    // fill in form
    cy.get('#username-login-validation').type(user.name);
    cy.get('#password-login-validation').type(user.password);

    cy.get('[type="submit"]').click();
  });
});
