/// <reference types="cypress" />

describe('This will try every switch path elements', () => {
  it('tests functionality of all homepage elements', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy="homepage-headline"]').should('be.visible');
    cy.get('[data-cy="homepage-subheadline"]').should('be.visible');

    cy.get('[data-cy="product-price"]').should('be.visible');
    cy.get('[data-cy="product-image"]').should('be.visible');

    cy.get('#product-view-3').click();

    cy.get('[data-cy="product-image"]').should('be.visible');
    cy.get('[data-cy="product-info-title"]').should('be.visible');
    cy.get('[data-cy="product-info-price"]').should('be.visible');
    cy.get('[data-cy="product-info-description"]').should('be.visible');

    cy.get('#quantity-btn').clear();
    cy.get('#quantity-btn').type(21);

    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('[data-cy="substract-quantity-btn"]').click();
    cy.get('[data-cy="substract-quantity-btn"]').click();

    cy.get('.materials-collapsible').click();
    cy.get('.dimensions-collapsible').click();
    cy.get('.instructions-collapsible').click();

    cy.get('#navbar-logo').click();
  });
});
