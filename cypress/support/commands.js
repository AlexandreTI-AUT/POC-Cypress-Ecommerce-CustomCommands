// ***********************************************
// This example commands.js shows you how to
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
import './commands'

Cypress.Commands.add('digitarProduto', () => {
    cy.get('#twotabsearchtextbox').type('BDD Books 1')
})

Cypress.Commands.add('clicarEnter', () => {
    cy.get('#nav-search-submit-button').click()
})

Cypress.Commands.add('retornoBusca', () => {
    cy.get('[data-asin="B07C5R9PLV"]').should('contain', 'Discovery: Explore behaviour using examples (BDD Books Book 1) (English Edition)');

})

Cypress.Commands.add('clicarProduto', () => {
    cy.get('img[data-image-index="1"]').click();

})

Cypress.Commands.add('tituloProduto', () => {
    cy.get('#productTitle').should('contain','Discovery: Explore behaviour using examples (BDD Books Book 1) (English Edition)' );

})

Cypress.Commands.add('precoProduto', () => {
    cy.get('#kindle-price').should('not.be.empty');

})

Cypress.Commands.add('detalheProduto', () => {
    cy.get('#detailBulletsWrapper_feature_div > h2').should('not.be.empty');

})