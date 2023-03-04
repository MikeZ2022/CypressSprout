// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.21 Cancel a Option Grant',()=>{
    cy.wait(2000)
    //Step1: go to options page, and find a certain option
    cy.contains('Securities').trigger('mouseover')
    cy.wait(2000)
    cy.contains('Share option awards').click()
    //Step2: click the cancel option from menu, and fufill the required field
    cy.get('[data-row-key="8771"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(4) > a').click()
    cy.get('#first_name > .ant-picker > .ant-picker-input > input').click()
    cy.wait(1000)
    cy.contains('Today').click()
    cy.get('#cancel_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(2) > div.col-xs-5 > .form-control').select('Clerical error')
    cy.get('#cancel_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(3) > div.col-xs-5').type('1')
    cy.get(':nth-child(4) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#cancel_step1 > .modal-footer > .btn').click()
    cy.wait(2000)
    cy.get('#cancel_step2 > .modal-footer > .btn').click()
    //Step3: check the option changed to canceled, and changed it back
    cy.contains('Canceled').should('be.exist')
    cy.get('[data-row-key="8771"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse cancellation').click()
})
})