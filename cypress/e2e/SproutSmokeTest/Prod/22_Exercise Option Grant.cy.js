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

    it('1.22 Exercise a option grant',()=>{
    cy.wait(2000)
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Share option awards').click()
    cy.get('[data-row-key="9638"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(1) > .col-xs-5 > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > .col-xs-5 > .form-control').type('1')
    cy.get('#exercise_select').selectFile('cypress/fixtures/TestFromMike.txt')
    cy.wait(2000)
    cy.get('#exercise_step1 > .modal-footer > .btn').click()
    cy.get('.body-one > .table > tbody > :nth-child(13) > :nth-child(1)')
      .wait(1000)
      .trigger('mousedown,bottom')
    cy.get('#exercise_step2 > .modal-footer > .btn').click()
    cy.contains('Partially exercised').should('be.exist')
    cy.reload()
    cy.get('.sprout-task-tip-btns > .ant-btn').click()
    cy.get('.ant-dropdown-trigger.sprout-header-task').click()
    cy.contains('Sign certificate').click()
    cy.get('.ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
    cy.get('.task-sign-btns > .ant-btn').click()
    cy.get('.signature-btn-wrap > .ant-btn').click()
})
})