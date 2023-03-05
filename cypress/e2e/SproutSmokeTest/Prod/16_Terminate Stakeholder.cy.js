// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.16 Terminate a stakeholder',()=>{
    cy.wait(2000)
    //Step1: go to option page, find a certain certificate, and open the menu, click 'Terminate Stakeholder'
    cy.contains('Securities').trigger('mouseover')
    cy.wait(2000)
    cy.contains('Share option awards').click()
    cy.get('[data-row-key="10347"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(7) > a').click()
    cy.wait(1000)
    //Step2: Select Today in Termination date, and 'With cause'in Termination type, 'Investor'in New relationship
    cy.get(':nth-child(1) > div.col-xs-4 > .ant-picker > .ant-picker-input').click()
    cy.wait(1000)
    cy.contains('Today').click()
    cy.get('#termination_type_01 > .form-control').select('With cause')
    cy.get('#new_relationship_01 > .form-control').select('Investor')
    cy.get('#terminationDetails > .nav > .modal-footer > .btn').click()
    //Step3:Keep the Personal email address as same, click to next step
    cy.get('#notifications > .nav > .modal-footer > .btn').click()
    cy.wait(2000)
    //Step4: click to mark all Equity list and choose 'No expiration date'
    cy.get('.ter-reviewContent > :nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > .ant-table-row > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
    cy.wait(1000)
    cy.get('.ant-table-cell-fix-right > .ant-picker > .ant-picker-input > input').click()
    cy.wait(1000)
    cy.contains('No expiration date').click()
    //Step5: Click Terminate Stakeholder button to terminate the stakeholder
    cy.get('#confirm_checkbox > .send-div').click()
    cy.get('.nav > .preStock-footer > .btn').click()
    cy.get('#review > .preStock-footer > .btn').click()
    cy.contains('Exercisable').should('be.exist')
    //Step6: find the same certificate, and click 'Reverse terminaion' to change status back
    cy.get('[data-row-key="10347"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Reverse termination').click()
    cy.get('.ant-modal-body > .modal-content > .modal-footer > :nth-child(2)').click()
    cy.visit('/home/summary')
})
})