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

    it('1.17 Exercise a option grant',()=>{
    cy.contains('Securities').click()
    cy.contains('Share Option Awards').click()
    cy.get('[data-row-key="8941"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Exercise options').click()
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(1) > .col-xs-5 > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > .col-xs-5 > .form-control').type('1')
    cy.get('#exercise_select').selectFile('cypress/fixtures/TestFromMike.txt')
    cy.wait(2000)
    cy.contains('Review Details').click()
    cy.get('#exercise_step2 > .modal-header > .back-btn').click()
    cy.contains('Review Details').click()
    cy.get('#exercise_step2 > .modal-footer > .btn').click()
    cy.contains('Partially exercised').should('be.exist')
    cy.get('.sprout-header-task').click()
    cy.contains('Sign certificate').click()
    cy.get('.task-sign-btns > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner').check()
    cy.get('.task-sign-btns > .ant-btn').click()
    cy.get('.signature-btn-wrap > .ant-btn').click()
    cy.contains('Exercisable').should('be.exist')
    cy.get('[data-row-key="8941"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse termination').click()
    cy.get('.ant-modal-body > .modal-content > .modal-footer > :nth-child(2)').click()
    cy.contains('Exercisable').should('not.exist')
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})