describe('Display Header on page load and 25 pokemon', () => {
  beforeEach(() => {
    cy.mockAPI()
    cy.visit('http://localhost:3000?itemsperpage=1')
  })
  it('Has a header', () => {
    cy.visit('http://localhost:3000?itemsperpage=1')
  })
})