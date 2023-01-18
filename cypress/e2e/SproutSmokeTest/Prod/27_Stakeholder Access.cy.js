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

    it('1.27 Stakeholder access',()=>{
    cy.contains('Stakeholders').click()
    cy.contains('Stakeholder access').click()
    cy.wait(20000)
    cy.get('.ant-input').type('test{enter}')
    cy.get('[data-row-key="5597"] > .ant-table-selection-column > .ant-checkbox-wrapper').click()
    cy.get('.captable-access-banner > :nth-child(1)').click()
    cy.get(':nth-child(6) > .ant-radio-wrapper > :nth-child(2) > .name').click()
    cy.get('.set-access-content-front > .set-access-btns > .ant-btn').click()
    cy.contains('Confirm').click()
    cy.wait(20000)
    cy.contains('Detailed view')
    cy.get('[data-row-key="5597"] > .ant-table-selection-column > .ant-checkbox-wrapper').click()
    cy.get('.captable-access-banner > :nth-child(1)').click()
    cy.get(':nth-child(2) > .ant-radio-wrapper > :nth-child(2) > .name').click()
    cy.get('.set-access-content-front > .set-access-btns > .ant-btn').click()
    cy.contains('Confirm').click()
    cy.contains('Basic view')
    cy.wait(2200)
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})