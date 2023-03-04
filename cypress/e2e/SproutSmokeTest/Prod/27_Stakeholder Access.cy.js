// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.27 Stakeholder access',()=>{
      cy.wait(2000)
      //Step1: Go to Stakeholder access page, and find a stakeholder, change the access view to 'Detailed view'
      cy.contains('Stakeholders').trigger('mouseover')
      cy.wait(1000)
      cy.contains('Stakeholder access').click()
      cy.wait(20000)
      cy.get('.ant-input').type('test{enter}')
      cy.get('[data-row-key="5597"] > .ant-table-selection-column > .ant-checkbox-wrapper').click()
      cy.get('.captable-access-banner > :nth-child(1)').click()
      cy.get(':nth-child(6) > .ant-radio-wrapper > :nth-child(2) > .name').click()
      cy.get('.set-access-content-front > .set-access-btns > .ant-btn').click()
      cy.contains('Confirm').click()
      cy.wait(20000)
      cy.contains('Detailed view')
      //Step2: Find the same stakeholder and change the view back to Basic View
      cy.get('[data-row-key="5597"] > .ant-table-selection-column > .ant-checkbox-wrapper').click()
      cy.get('.captable-access-banner > :nth-child(1)').click()
      cy.get(':nth-child(2) > .ant-radio-wrapper > :nth-child(2) > .name').click()
      cy.get('.set-access-content-front > .set-access-btns > .ant-btn').click()
      cy.contains('Confirm').click()
      cy.contains('Basic view')
})
})