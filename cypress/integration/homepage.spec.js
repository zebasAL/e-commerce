/// <reference types="cypress" />

describe('This will try every switch path elements', () => {
  it('tests functionality of all homepage elements', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy="homepage-headline"]').should('be.visible');
    cy.get('[data-cy="homepage-subheadline"]').should('be.visible');

    cy.get('[data-cy="product-price"]').should('be.visible');
    cy.get('[data-cy="product-image-5"]').should('be.visible');

    cy.get('#product-view-1').click();
    cy.get('#navbar-logo').click();
  });
});
