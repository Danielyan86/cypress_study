// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', () => {
	it('Does not do much!', () => {
		expect(true).to.equal(false)
	})
	it('Visits the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()
		cy.url().should('include','/commands/actions')
	})
})
