// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.26 Portfolio view',()=>{
    cy.get('.ant-dropdown-trigger > .sprout-header-avatar').click()
    cy.contains('See More Portfolios').click()
    cy.contains('Mike')
    cy.visit('/home/summary')
    cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})