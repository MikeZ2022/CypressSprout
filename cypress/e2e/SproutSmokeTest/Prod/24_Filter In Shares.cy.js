// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.24 Filter function in Shares',()=>{
    cy.wait(2000)
    //Step1: Go to shares, and open filter page, type 'Anna' in name filed
    cy.visit('/home/securities/shares')
    cy.wait(5000)
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('Anna{enter}')
    //Step2: Type CSA in field
    cy.get(':nth-child(1) > .ant-form-item-label > label').click()
    cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('CSA{enter}')
    cy.get(':nth-child(2) > .ant-form-item-label > label').click()
    //Step3: Type No in field
    cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('No{enter}')
    cy.get(':nth-child(4) > .ant-form-item-label > label').click()
    //Step4: apply the filter and check the result '3 items'
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('3 items').should('be.exist')
    //Step5: open the filter, remove one fiter and apply
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(13) > :nth-child(2)').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    //Step6: check the result '4 items' show, and only Anna sun shows 
    cy.contains('4 items').should('be.exist')
    cy.contains('Anna Sun').should('exist')
    cy.contains('Feng Xu').should('not.visible')
    //Step7: add more filter and check there is no data for the result
    cy.get('.ant-badge > .ant-btn').click()
    cy.get('.ant-picker-input-active > input')
    .click()
    .wait(1000)
    cy.get('.ant-picker-cell-inner')
    .eq(1)
    .click()
    cy.get('.ant-picker-cell-inner')
    .eq(-1)
    .click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('No Data').should('exist')
})
})