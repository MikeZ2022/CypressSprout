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
    cy.contains('Securities').click()
    cy.contains('Share option awards').click()
    cy.get('.ant-input').type('miketest{enter}')
    cy.contains('Canceled')
    cy.contains('Test company Mike').click()
    cy.contains('See More Portfolios').click()
    cy.get('.filter-item > .word-item').click()
    cy.get('.portfolio-btns > :nth-child(2)').click()
    cy.contains('Canceled')
    cy.contains('EA1-651').click()
    cy.contains('mikeTest').should('exist')
    cy.contains('mzhuang2019@gmail.com').should('exist')
    cy.go('back')
    cy.get('.filter-item > .word-item').click()
    cy.get('.portfolio-btns > :nth-child(3)').click()
    
    cy.contains('CSA').click()
    cy.contains('Feng Xu').click()
    cy.contains('CSA-2').click()
    cy.contains('feng.xu+9997@getsprout.co').should('exist')
    cy.go('back')
    cy.wait(2200)
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})