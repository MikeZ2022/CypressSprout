// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.25 Filter function in Options',()=>{
    cy.wait(2000)
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Share option awards').click()
    cy.get('.ant-badge > .ant-btn').click()
    cy.contains('INTL').click()
    cy.get(':nth-child(1) > .ant-form-item-label > label').click()
    cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('Employee 1{enter}')
    cy.get(':nth-child(2) > .ant-form-item-label > label').click()
    cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('EA plan 1{enter}')
    cy.get(':nth-child(3) > .ant-form-item-label > label').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('4 items').should('be.exist')
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(5) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
    .click()
    .wait(1000)
    .type('Employee vesting plan{enter}')
    cy.get(':nth-child(5) > .ant-form-item-label > label').click()
    cy.get('.ant-checkbox-group > :nth-child(12) > :nth-child(2)').click()
    ///Check Partially exercised
    cy.get('.ant-checkbox-group > :nth-child(11) > :nth-child(2)').click()
    /// Check Outstanding
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    /// click Apply button
    cy.contains('2 items').should('be.exist')
    cy.get('.ant-badge > .ant-btn').click()
    cy.contains('Clear all filters').click()
    cy.contains('mikeTest').should('be.exist')
})
})