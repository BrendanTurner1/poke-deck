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
Cypress.Commands.add('mockAPI', () =>{
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/**", {
      statusCode: 200,
      fixture: 'pokemon.json'
    })
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/1", {
      statusCode: 200,
      fixture: 'pokemonInfo.json'
    })
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/2", {
      statusCode: 200,
      fixture: 'pokemon2Info.json'
    })
})
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