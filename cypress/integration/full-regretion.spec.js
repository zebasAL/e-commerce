import user from '../fixtures/user';
/// <reference types="cypress" />

describe('Login spec', () => {
  it('tests Login flow', () => {
    cy.visit('http://localhost:3000/');

    // go  to sign in page
    cy.get('button#shopping-cart-btn').click();

    cy.get('#user-login-btn').click();
    cy.get('#login-btn').click();

    // fill in form
    cy.get('#username-login-validation').type(user.name);
    cy.get('#password-login-validation').type(user.password);

    cy.get('[type="submit"]').click();
    // cy.get('input#quantity-btn8').should('be.visible', 27);

    cy.get('[data-cy="homepage-headline"]').should('be.visible');
    cy.get('[data-cy="homepage-subheadline"]').should('be.visible');

    cy.get('[data-cy="product-price"]').should('be.visible');
    cy.get('[data-cy="product-image-5"]').should('be.visible');

    cy.get('#product-view-1').click();
    cy.get('#navbar-logo').click();

    // type in autocomplete input
    cy.get('input[type="text"]').click({ force: true });
    cy.get('input[type="text"]').type('acer');
    cy.get('.autocomplete-wrapper li').click();
    cy.get('input[type="text"]').should('be.visible', '');
    cy.get('[data-cy="product-info-title"]').should('be.visible', 'acer');

    cy.get('#navbar-logo').click();

    cy.get('[data-cy="homepage-headline"]').should('be.visible');
    cy.get('[data-cy="homepage-subheadline"]').should('be.visible');

    cy.get('[data-cy="product-price"]').should('be.visible');
    cy.get('[data-cy="product-image-5"]').should('be.visible');

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
    cy.get('[data-cy="product-image-8"]').click();
    cy.get('#navbar-logo').click();

    // go  to see all category
    cy.get('[data-cy="see-all"]').click();
    cy.get('[data-cy="category-view-headline"]').should('be.visible');
    // try changing filter from cheaper to expensive
    cy.get('[data-cy="category-select-filter"]').click();
    cy.get('#downshift-8-item-0').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Cheaper');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-filter"] button').click();
    cy.get('#downshift-8-item-1').click();
    cy.get('[data-cy="category-select-filter"]').should('be.visible', 'Expensive');
    // try changing sort from descending to ascending
    cy.get('[data-cy="category-select-sort"]').click();
    cy.get('#downshift-9-item-0').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Descending');
    cy.get('[data-cy="category-view-headline"]').click();
    cy.get('[data-cy="category-select-sort"] button').click();
    cy.get('#downshift-9-item-1').click();
    cy.get('[data-cy="category-select-sort"]').should('be.visible', 'Ascending');

    // add product to shopping cart
    cy.get('[data-cy="product-image-19"]').click();
    cy.get('[data-cy="product-info-title"]').should('be.visible');
    cy.get('#quantity-btn').clear();
    cy.get('#quantity-btn').type(2);
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('button#add-to-cart-btn').click();
    cy.get('div h4').should('be.visible', 'New product added');
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 23);
    cy.get('button#shopping-cart-btn').click();
    cy.get('[data-cy="product-cart-title-19"]').should('be.visible');
    cy.get('[data-cy="product-cart-image-19"]').should('be.visible');
    cy.get('input#quantity-btn19').should('be.visible', 23);
    cy.get('.css-yrjgl1').click();

    // add a second product to shopping cart
    cy.get('[data-cy="electronics"]').click();
    cy.get('a#product-view-14').click();
    cy.get('[data-cy="product-info-title"]').should('be.visible');
    cy.get('#quantity-btn').clear();
    cy.get('#quantity-btn').type(2);
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('button#add-to-cart-btn').click();
    cy.get('div h4').should('be.visible', 'New product added');
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 46);
    cy.get('button#shopping-cart-btn').click();
    cy.get('[data-cy="product-cart-title-14"]').should('be.visible');
    cy.get('[data-cy="product-cart-image-14"]').should('be.visible');
    cy.get('input#quantity-btn14').should('be.visible', 23);
    cy.get('.css-yrjgl1').click();
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 13);

    // update product quantity
    cy.get('#quantity-btn').clear();
    cy.get('#quantity-btn').type(1);
    cy.get('button#add-to-cart-btn').click();
    cy.get('div h4').should('be.visible', 'Product updated');
    cy.get('button#shopping-cart-btn').click();
    cy.get('input#quantity-btn14').should('be.visible', 34);
    cy.get('.css-yrjgl1').click();
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 57);
    cy.get('button#shopping-cart-btn').click();

    // delete first cart
    cy.get('[data-cy="delete-button-1-14"]').click();
    cy.get('div h4').should('be.visible', 'Product deleted');
    cy.get('[data-cy="delete-button-1-19"]').click();
    cy.get('div h4').should('be.visible', 'Product deleted');
    cy.get('[data-cy="delete-button-1-1"]').click();
    cy.get('div h4').should('be.visible', 'Product deleted');
    cy.get('[data-cy="delete-button-1-2"]').click();
    cy.get('div h4').should('be.visible', 'Product deleted');
    cy.get('[data-cy="delete-button-1-3"]').click();
    cy.get('div h4').should('be.visible', 'Cart deleted');

    // delete second cart
    cy.get('[data-cy="delete-button-2-2"]').click();
    cy.get('div h4').should('be.visible', 'Product deleted');
    cy.get('[data-cy="delete-button-2-1"]').click();
    cy.get('div h4').should('be.visible', 'Product deleted');
    cy.get('[data-cy="delete-button-2-5"]').click();
    cy.get('div h4').should('be.visible', 'Cart deleted');
    cy.get('[data-cy="message-no-products"]').should('be.visible', 'You have not added any product yet');
    cy.get('.css-yrjgl1').click();
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 0);

    // create a new cart
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('button#add-to-cart-btn').click();
    cy.get('div h4').should('be.visible', 'New cart added');
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 2);
    cy.get('button#shopping-cart-btn').click();
    cy.get('[data-cy="product-cart-title-14"]').should('be.visible');
    cy.get('[data-cy="product-cart-image-14"]').should('be.visible');
    cy.get('input#quantity-btn14').should('be.visible', 2);
    cy.get('.css-yrjgl1').click();

    // update product quantity
    cy.get('button#add-to-cart-btn').click();
    cy.get('div h4').should('be.visible', 'Product updated');
    cy.get('button#shopping-cart-btn').click();
    cy.get('.css-yrjgl1').click();

    // add a second product to shopping cart
    cy.get('[data-cy="see-all"]').click();
    cy.get('[data-cy="category-view-headline"]').should('be.visible');
    cy.get('[data-cy="product-image-8"]').click();
    cy.get('[data-cy="product-info-title"]').should('be.visible');
    cy.get('#quantity-btn').clear();
    cy.get('#quantity-btn').type(2);
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('[data-cy="sum-quantity-btn"]').click();
    cy.get('button#add-to-cart-btn').click();
    cy.get('div h4').should('be.visible', 'New product added');
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 23);
    cy.get('button#shopping-cart-btn').click();
    cy.get('[data-cy="product-cart-title-8"]').should('be.visible');
    cy.get('[data-cy="product-cart-image-8"]').should('be.visible');
    cy.get('input#quantity-btn8').should('be.visible', 23);

    // delete all products from shopping cart
    cy.get('[data-cy="delete-button-1-14"]').click();
    cy.get('div h4').should('be.visible', 'Product deleted');
    cy.get('[data-cy="delete-button-1-8"]').click();
    cy.get('div h4').should('be.visible', 'Cart deleted');
    cy.get('[data-cy="message-no-products"]').should('be.visible', 'You have not added any product yet');
    cy.get('.css-yrjgl1').click();
    cy.get('[data-cy="cart-products-number"]').should('be.visible', 0);

    cy.get('button#user-myaccount-btn').click();
    cy.get('#logout-btn').click();
  });
});
