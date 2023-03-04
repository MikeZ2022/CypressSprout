// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.15 Cancel a Certificate',()=>{
    cy.wait(2000)
    //Step1: go to shares, and find a certain share and click 'Cancel certificate'
    cy.visit('/home/securities/shares')
    cy.get('[data-row-key="8561"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(5) > a').click()
    //Step2: in the cancel query page, date choose Today, reason select 'Clerical error' and note type 'Test From Mike'
    cy.get('#first_name > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('#cancel_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > div.col-xs-5 > .form-control').select('Clerical error')
    cy.get(':nth-child(4) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#cancel_step1 > .modal-footer > .btn').click()
    cy.get('#cancel_step2 > .modal-footer > .btn').click()
    //Step3: After cancel saved, check the canceled status shows
    cy.contains('Canceled').should('be.exist')
    //Step4: Find the same share, click 'Reverse cancellation' from menu
    cy.get('[data-row-key="8561"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse cancellation').click()
    cy.visit('/home/summary')
})
})