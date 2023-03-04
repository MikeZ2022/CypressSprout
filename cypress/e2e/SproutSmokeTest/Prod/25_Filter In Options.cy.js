// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.25 Filter function in Options',()=>{
    cy.wait(2000)
    //Step1: Go to options page, and open filter page, mark INTL as checked
    cy.contains('Securities').trigger('mouseover')
    cy.contains('Share option awards').click()
    cy.get('.ant-badge > .ant-btn').click()
    cy.contains('INTL').click()
    //Step2: type employee 1 in name filed
    cy.get(':nth-child(1) > .ant-form-item-label > label').click()
    cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('Employee 1{enter}')
    //Step3: type EA plan
    cy.get(':nth-child(2) > .ant-form-item-label > label').click()
    cy.get(':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('EA plan 1{enter}')
    //Step4: save this filter, and check the result '3 items' shows
    cy.get(':nth-child(3) > .ant-form-item-label > label').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('3 items').should('be.exist')
    //Step5: open filter page again, add vesting schdule'Employee vesting plan', and save the filter
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(5) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
    .click()
    .wait(1000)
    .type('Employee vesting plan{enter}')
    cy.get(':nth-child(5) > .ant-form-item-label > label').click()
    cy.get('.ant-checkbox-group > :nth-child(12) > :nth-child(2)').click()
    //Step6: Marked Partially exercised
    cy.get('.ant-checkbox-group > :nth-child(11) > :nth-child(2)').click()
    //Step7: Marked Outstanding
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    //Step8: Apply this filter and show the result '1 items', open the filter and clear all filters
    cy.contains('1 items').should('be.exist')
    cy.get('.ant-badge > .ant-btn').click()
    cy.contains('Clear all filters').click()
    cy.contains('mikeTest').should('be.exist')
})
})