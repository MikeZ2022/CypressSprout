// <reference types="cypress"/>

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

    it('1.16 Terminate a stakeholder',()=>{
    cy.contains('Securities').click()
    cy.contains('Share option awards').click()
    cy.get('[data-row-key="10347"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(7) > a').click()
    cy.get(':nth-child(1) > div.col-xs-4 > .ant-picker').click()
    cy.wait(2000)
    cy.contains('Today').click()
    cy.get('#termination_type_01 > .form-control').select('With cause')
    cy.get('#new_relationship_01 > .form-control').select('Investor')
    cy.get('#terminationDetails > .nav > .modal-footer > .btn').click()
    cy.get('#notifications > .nav > .modal-footer > .btn').click()
    cy.wait(2000)
    cy.get('.ter-reviewContent > :nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > .ant-table-row > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
    cy.wait(1000)
    cy.get('.ant-table-cell-fix-right > .ant-picker > .ant-picker-input > input').click()
    cy.wait(1000)
    cy.contains('No expiration date').click()
    cy.get('#confirm_checkbox > .send-div').click()
    cy.get('.nav > .preStock-footer > .btn').click()
    cy.get('#review > .preStock-footer > .btn').click()
    cy.contains('Exercisable').should('be.exist')
    cy.get('[data-row-key="10347"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse termination').click()
    cy.get('.ant-modal-body > .modal-content > .modal-footer > :nth-child(2)').click()
    cy.contains('Exercisable').should('not.exist')
    cy.visit('/home/summary')
    cy.wait(2000)
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})