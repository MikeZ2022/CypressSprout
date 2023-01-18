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

    it('1.28 Convertibles convert to shares',()=>{
    cy.contains('Securities').click()
    cy.contains('Convertibles').click()
    cy.get('[data-row-key="8568"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(7) > a').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .btn').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .prefer-togglebtn').click()
    cy.get('#draft_share_class').select('Ordinary (CS)')
    cy.get(':nth-child(3) > .prefer-togglebtn').click()
    cy.contains('CN1-2 (Investor Y)')
    cy.get(':nth-child(4) > .prefer-togglebtn').click()
    cy.wait(1111)
    cy.get('#draft_number_of_shares').type('1')
    cy.wait(1111)
    cy.get('#draft_cash_paid').type('1')
    cy.get(':nth-child(5) > .prefer-togglebtn').click()
    cy.get('.no-paddingleft > .ant-select > .ant-select-selector > .ant-select-selection-item').type('miketest{enter}')
    cy.get(':nth-child(6) > .prefer-togglebtn').click()
    cy.get(':nth-child(1) > .ant-picker > .ant-picker-input').click()
    cy.wait(1000)
    cy.contains('Today').click()
    cy.get(':nth-child(2) > .ant-picker > .ant-picker-input > input').click()
    cy.wait(2000)
    cy.get('.ant-picker-footer > .ant-picker-today-btn').eq(1).click()
    cy.get('.ant-table-selection > .ant-checkbox-wrapper').click()
    cy.get('.form-group > :nth-child(3) > .btn').click()
    cy.get('.captable-footer > .btn').click()
    cy.wait(5000)
    cy.get('.sprout-task-tip-btns > .ant-btn').click()
    cy.get('.ant-dropdown-trigger.sprout-header-task').click()
    cy.contains('Sign certificate').click()
    cy.get('.ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
    cy.get('.task-sign-btns > .ant-btn').click()
    cy.get('.signature-btn-wrap > .ant-btn').click()
    cy.wait(5000)
    cy.contains('Test company Mike').click()
    cy.contains('See More Companies').click()
    cy.get(':nth-child(2) > .filter-item > .word-item').click()
    cy.visit('home/securities/convertibles')
    cy.get('[data-row-key="8568"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse cancellation').click()
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click()
    
})
})