// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.23 Filter function in Stakeholders',()=>{
    cy.wait(2000)
    //Step1: Go to all stakeholders page
    cy.contains('Stakeholders').click()
    cy.contains('All stakeholders').click()
    cy.wait(5000)
    //Step2: Open filter page, and type 'anna' in name field
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('anna{enter}')
    //Step3: type CSA in type field
    cy.get('.is-dirty > .ant-form-item-label > label').click()
    cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('CSA{enter}')
    //Step4: type 0 in field
    cy.get(':nth-child(2) > .ant-form-item-label > label').click()
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input')
       .click()
       .wait(1000)
       .type('0{enter}')
    //Step5: type none in field
    cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('None{enter}')
    //Step6: apply the filter and check only anna sun's shares exist in the result, and the number should be 4
    cy.get(':nth-child(4) > .ant-form-item-label > label').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.wait(5000)
    cy.contains('mike.test007').should('not.exist')
    cy.contains('Anna Sun').should('exist')
    cy.contains('4 items').should('be.exist')
    cy.get('.ant-badge > .ant-btn').click()
    //Step7: add more filter and check the result changed according
    cy.get(':nth-child(5) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(1000)
        .type('No{enter}')
    cy.get(':nth-child(5) > .ant-form-item-label > label').click()
    cy.get('.ant-checkbox-group > :nth-child(7) > :nth-child(2)')
      .click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.wait(5000)
    cy.contains('6').should('exist')
    cy.contains('No Data').should('exist')
})
})