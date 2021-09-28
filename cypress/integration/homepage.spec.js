/// <reference types="cypress" />

describe('This will try every switch path elements', () => {
  it('tests functionality of all homepage elements', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy="homepage-headline"]').should('be.visible');
    cy.get('[data-cy="homepage-subheadline"]').should('be.visible');

    cy.get('[data-cy="product-price"]').should('be.visible');
    cy.get('[data-cy="product-image"]').should('be.visible');

    cy.get('#product-view-1').click();

    cy.get('[data-cy="product-image"]').should('be.visible');
    cy.get('[data-cy="product-info-title"]').should('be.visible');
    cy.get('[data-cy="product-info-price"]').should('be.visible');
    cy.get('[data-cy="product-info-description"]').should('be.visible');

    cy.get('[data-cy="quantity-input"]').select(1);
    cy.get('[data-cy="quantity-input"]').type(21);

    cy.get('[data-cy="quantity-sum-button"]').click();
    cy.get('[data-cy="quantity-sum-button"]').click();
    cy.get('[data-cy="quantity-substract-button"]').click();
    cy.get('[data-cy="quantity-substract-button"]').click();

    cy.get('#navbar-logo').click();
  });
});
