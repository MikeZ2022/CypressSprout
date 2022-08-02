
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
    
    it('1.3 User open all headers',()=>{
        cy.get('#menu-item-105').trigger('mouseover')
        cy.contains('Sprout')
        cy.contains('Folium')
        cy.wait(2000)
        cy.contains('Pricing')
        cy.get('#menu-item-115').trigger('mouseover')
        cy.contains('Offers')
        cy.wait(2000)
        cy.get('#menu-item-442').trigger('mouseover')
        cy.contains('Insights')
        cy.contains('Cofounder Equity Calculator')
        cy.contains('FAQ')
        cy.wait(2000)
        cy.get('.is-style-hollow').contains('Learn more').click()
        cy.contains('A Trusted Stakeholder Management Solution for Shares, ESOP and Everything in Between.').should('exist')
        cy.get('.custom-logo-link').click()
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
