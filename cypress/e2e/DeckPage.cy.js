describe('Display deck page with add and remove feature', () => {
  beforeEach(() => {
    cy.mockAPI()
    cy.visit('http://localhost:3000?itemsperpage=2')
  })

  it('Should be able to view an empty deck, Home button and header', () => {
    cy.get('h2').should('contain', 'View Deck').click()
    cy.get('.deck-container').should('have.length', 0)
    cy.get('.deck-view').contains('.Link', 'Home')
    cy.get('header').should('be.visible')
      .get('header').should('contain', 'PokéDeck')
  })

  it('Should be able to add cards to deck', () => {
    cy.get('.pokemon-display').children().first()
      .children().contains('button', 'Add to Deck').click()
    cy.get('.pokemon-display').children().last()
      .children().contains('button', 'Add to Deck').click()
    cy.get('h2').should('contain', 'View Deck').click()
    cy.get('.deck-display').children()
      .should('have.length', 2)
    cy.get('.deck-display').children()
      .first().should('contain', 'bulbasaur')
    cy.get('.deck-display').children().first()
    .find('img').should('have.attr', 'src').and('include', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
    cy.get('.deck-display').children()
      .first().should('contain', 'grass')
    cy.get('.deck-display').children()
      .first().should('contain', 'poison')
    cy.get('.deck-display').children()
      .first().should('contain', 'Remove')
    cy.get('.deck-display').children()
      .last().should('contain', 'ivysaur')
    cy.get('.deck-display').children().last()
      .find('img').should('have.attr', 'src').and('include', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png')
    cy.get('.deck-display').children()
      .last().should('contain', 'grass')
    cy.get('.deck-display').children()
      .last().should('contain', 'poison')
    cy.get('.deck-display').children()
      .last().should('contain', 'Remove')
  })

  it('Should be able to remove cards', () => {
    cy.get('.pokemon-display').children().first()
      .children().contains('button', 'Add to Deck').click()
    cy.get('.pokemon-display').children().last()
      .children().contains('button', 'Add to Deck').click()
    cy.get('h2').should('contain', 'View Deck').click()
    cy.get('.deck-display').children().first().children()
      .contains('Button', 'Remove').click()
    cy.get('.deck-display').should('have.length', 1)
    cy.get('.deck-display').children()
      .first().should('contain', 'ivysaur')
    cy.get('.deck-display').children().first()
    .find('img').should('have.attr', 'src').and('include', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png')
    cy.get('.deck-display').children()
      .first().should('contain', 'grass')
    cy.get('.deck-display').children()
      .first().should('contain', 'poison')
    cy.get('.deck-display').children()
      .first().should('contain', 'Remove')
  })
})