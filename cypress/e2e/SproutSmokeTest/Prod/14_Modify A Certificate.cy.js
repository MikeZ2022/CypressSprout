 /// <reference types="cypress"/>

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

    it('1.14 Modify a Certificate',()=>{
    cy.contains('Securities').click()
    cy.contains('Shares').click()
    cy.get('[data-row-key="8548"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Modify certificate').click()
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(3) > .form-control').type('1')
    cy.get('#modifyValue > .modal-footer > .btn').click()
    cy.get('#reviewModifications > .modal-footer > .btn').click()
    cy.get('#reviewModifications > .modal-header > .close').click()
    cy.wait(1000)
    cy.contains('1').should('be.exist')
    cy.visit('home/captable/byshareclass')
    cy.wait(2000)
    cy.contains('CSA').click()
    cy.wait(2000)
    cy.contains('Anna Sun').click()
    cy.contains('CSA-1').click()
    cy.contains('1').should('be.exist')
    cy.visit('/home/securities/shares')
    cy.get('[data-row-key="8548"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Modify certificate').click()
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(3) > .form-control').type('123456')
    cy.get('#modifyValue > .modal-footer > .btn').click()
    cy.get('#reviewModifications > .modal-footer > .btn').click()
    cy.contains('123456').should('be.exist')
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})