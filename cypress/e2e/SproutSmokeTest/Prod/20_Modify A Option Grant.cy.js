/// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.20 Modify a Option grant',()=>{
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Share option awards').click()
    cy.get('[data-row-key="8554"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(1) > a').click()
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyOptionReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(3) > .form-control').type('1')
    cy.get('#modifyOptionValue > .modal-footer > .btn').click()
    cy.get('#reviewOptionModifications > .modal-footer > .btn').click()
    cy.wait(1000)
    cy.contains('1').should('be.exist')
    cy.contains('Cap table').click()
    cy.contains('By share class').click()
    cy.contains('CSA').click()
    cy.contains('Anna Sun').click()
    cy.contains('CSA-1').click()
    cy.contains('1').should('be.exist')
    cy.visit('/home/securities/stock-option-awards')
    cy.wait(2000)
    cy.get('[data-row-key="8554"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(1) > a').click()
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyOptionReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(3) > .form-control').type('123')
    cy.wait(1000)
    cy.get('#modifyOptionValue > .modal-footer > .btn').click()
    cy.get('#reviewOptionModifications > .modal-footer > .btn').click()
    cy.wait(2000)
    cy.contains('123').should('exist')
})
})