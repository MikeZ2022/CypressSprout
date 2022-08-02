///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.wait(500)
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
      })
    
    it('1.2 User Sign Up',()=>{
        cy.get('#menu-item-536').click()
        cy.get('#name').type('TestFromMike')
        cy.wait(500)
        cy.get('#email').type('TestFromMike')
        cy.wait(500)
        cy.get('#title').type('Mike_1983')
        cy.$$(500)
        cy.get('#company').type('TestCompany')
        cy.wait(500)
        cy.get('#share').type('TestFromMike')
        cy.wait(500)
        cy.get('#answer').type('TestFromMike')
        cy.wait(500)
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
