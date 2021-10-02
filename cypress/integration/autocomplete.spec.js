/// <reference types="cypress" />

describe('Login spec', () => {
  it('tests Login flow', () => {
    cy.visit('http://localhost:3000/');

    // type in autocomplete input
    cy.get('input[type="text"]').click({ force: true });
    cy.get('input[type="text"]').type('acer');
    cy.get('.autocomplete-wrapper li').click();
    cy.get('input[type="text"]').should('be.visible', '');
    cy.get('[data-cy="product-info-title"]').should('be.visible', 'acer');
  });
});
