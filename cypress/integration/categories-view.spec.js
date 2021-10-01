/// <reference types="cypress" />

describe('categories products', () => {
  it('tests category flow', () => {
    cy.visit('http://localhost:3000/');

    // go  to electronics category
    cy.get('[data-cy="electronics"]').click();
    cy.get('[data-cy="category-view-headline"]').should('be.visible');
    // try changing filter from cheaper to expensive
    cy.get('[data-cy="category-select-filter"]').click();
    cy.get('#downshift-0-item-0').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Cheaper');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-filter"] button').click();
    cy.get('#downshift-0-item-1').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Expensive');
    // try changing sort from descending to ascending
    cy.get('[data-cy="category-select-sort"]').click();
    cy.get('#downshift-1-item-0').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Descending');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-sort"] button').click();
    cy.get('#downshift-1-item-1').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Ascending');
    // try clicking a product
    cy.get('[data-cy="product-image-10"]').click();
    cy.get('#navbar-logo').click();

    // go  to jewelry category
    cy.get('[data-cy="jewelery"]').click();
    cy.get('[data-cy="category-view-headline"]').should('be.visible');
    // try changing filter from cheaper to expensive
    cy.get('[data-cy="category-select-filter"]').click();
    cy.get('#downshift-2-item-0').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Cheaper');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-filter"] button').click();
    cy.get('#downshift-2-item-1').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Expensive');
    // try changing sort from descending to ascending
    cy.get('[data-cy="category-select-sort"]').click();
    cy.get('#downshift-3-item-0').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Descending');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-sort"] button').click();
    cy.get('#downshift-3-item-1').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Ascending');
    // try clicking a product
    cy.get('[data-cy="product-image-8"]').click();
    cy.get('#navbar-logo').click();

    // go  to see all category
    cy.get('[data-cy="see-all"]').click();
    cy.get('[data-cy="category-view-headline"]').should('be.visible');
    // try changing filter from cheaper to expensive
    cy.get('[data-cy="category-select-filter"]').click();
    cy.get('#downshift-4-item-0').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Cheaper');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-filter"] button').click();
    cy.get('#downshift-4-item-1').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Expensive');
    // try changing sort from descending to ascending
    cy.get('[data-cy="category-select-sort"]').click();
    cy.get('#downshift-5-item-0').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Descending');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-sort"] button').click();
    cy.get('#downshift-5-item-1').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Ascending');
    // try clicking a product
    cy.get('[data-cy="product-image-19"]').click();
    cy.get('#navbar-logo').click();
  });
});
