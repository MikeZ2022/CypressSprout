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

    it('1.29 OPtions Covert to ipo',()=>{
    cy.contains('Securities').click()
    cy.contains('Share option awards').click()
    cy.wait(1000)
    cy.get('.draft-statistic-badge > .btn').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .btn').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .prefer-togglebtn').click()
    cy.get('.equity-plan > #draft_option_type').select('EA Plan 2 (EA2)')
    cy.get(':nth-child(3) > .prefer-togglebtn').click()
    cy.wait(1111)
    cy.get('#draft_option_quantity').type('1')
    cy.wait(1111)
    cy.get('#draft_option_exercise_price').type('1')
    cy.get(':nth-child(4) > .prefer-togglebtn').click()
    cy.get('.no-paddingleft > .ant-select > .ant-select-selector > .ant-select-selection-item').type('miketest{enter}')
    cy.get(':nth-child(2) > .prefer-togglebtn').click()
    cy.get(':nth-child(8) > .prefer-togglebtn').click()
    cy.wait(1000)
    cy.get('#doc_select1').selectFile('cypress/fixtures/TestFromMike.pdf')
    cy.wait(2000)
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
    cy.get('.filter-item > .word-item').click()
    cy.visit('home/securities/stock-option-awards')
    cy.get('.ant-badge > .ant-btn').click()
    cy.get('.ant-checkbox-group > :nth-child(11) > :nth-child(2)').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.get('.ant-input').type('Anna sun{enter}')
    cy.get('.ant-table-cell-fix-right > .ant-dropdown-trigger').eq(0).click()
    cy.get('.ant-dropdown-menu > :nth-child(3) > a').click()
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(1) > .col-xs-5 > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('#exercise_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > .col-xs-5 > .form-control').type('1')
    cy.get('#exercise_select').selectFile('cypress/fixtures/TestFromMike.txt')
    cy.get('#keep_checkbox > .send-div').click()
    cy.get('#exercise_step1 > .modal-footer > .btn').click()
    cy.get('#exercise_step2 > .modal-footer > .btn').click()
    cy.wait(5000)
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click()
    
})
})