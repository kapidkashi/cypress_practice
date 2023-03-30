/// <reference types="cypress" /> 
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
context('Input Test', () => {
  it('Test case 1: Input test', () => {
    cy.visit('https://demoqa.com/text-box', { failOnStatusCode: false });
    cy.get('input[type=text]').type('Joseph Angelo R. Pragados');
    cy.get('input[type=email]').type('email@gmail.com');
    cy.get('#currentAddress').type('Cabatuan, Iloilo');
    cy.get('#permanentAddress').type('Cabatuan, Iloilo');
    cy.get('#submit').click();
 
 
  });
});