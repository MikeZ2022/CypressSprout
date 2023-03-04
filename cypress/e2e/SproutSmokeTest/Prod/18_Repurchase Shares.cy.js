 /// <reference types="cypress"/>

 describe('SproutSmokeTest',()=>{
  beforeEach(() => {
      cy.viewport('macbook-16')
      cy.visit('https://www.getsprout.co')
      cy.get('#hs-eu-confirmation-button').click()
      cy.login('mzhuang2019@gmail.com','Mike_1983')
    })

  it('1.18 Repurchase Shares',()=>{
  cy.wait(1000)
  cy.visit('home/securities/shares')
  cy.wait(5000)
  cy.get('.draft-statistic-badge > .btn').click()
  cy.wait(1000)
  cy.get(':nth-child(2) > .btn').click()
  cy.wait(2000)
  cy.get(':nth-child(2) > .prefer-togglebtn').click()
  cy.get('#draft_share_class').select('Series A (PSA)')
  cy.wait(1000)
  cy.get(':nth-child(5) > .prefer-togglebtn').click()
  cy.get('.no-paddingleft > .ant-select > .ant-select-selector > .ant-select-selection-item').type('mikeTest{enter}')
  cy.get(':nth-child(4) > .prefer-togglebtn').click()
  cy.get('#draft_number_of_shares').type('1')
  cy.get(':nth-child(6) > .prefer-togglebtn').click()
  cy.wait(1000)
  cy.get(':nth-child(1) > .ant-picker > .ant-picker-input').click()
  cy.contains('Today').click()
  cy.wait(1000)
  cy.get(':nth-child(2) > .ant-picker > .ant-picker-input').click()
  cy.get('.ant-picker-footer > .ant-picker-today-btn').eq(1).click()
  cy.wait(2000)
  cy.get('.ant-table-selection > .ant-checkbox-wrapper').click()
  cy.get('.form-group > :nth-child(3) > .btn').click()
  cy.wait(1000)
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
  cy.get(':nth-child(2) > .filter-item > .word-item').click()
  cy.visit('home/securities/Shares')
  cy.wait(5000)
  cy.get('.ant-badge > .ant-btn').click()
  cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
    .type('Anna sun{enter}') 
    .click()
  cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
    .type('Series A{enter}')
    .click()
  cy.get('.ant-checkbox-group > :nth-child(11) > :nth-child(2)').click()
  cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
  cy.get('.ant-table-cell-fix-right > .ant-dropdown-trigger').eq(0).click()
  cy.get('.ant-dropdown-menu > :nth-child(3) > a').click()
  cy.get('#repurchase_reason > .form-control').select('Buyback')
  cy.get('#repurchase_repurchase_date > .ant-picker > .ant-picker-input > input').click()
  cy.contains('Today').click()
  cy.get('#repurchase_quantity > .form-control').type('1')
  cy.get('#repurchase_transaction_value').type('1')
  cy.wait(3000)
  cy.get('#repurchase-select').click()
  cy.wait(2000)
  cy.get('#repurchase-select').selectFile('cypress/fixtures/TestFromMike.pdf')
  cy.wait(2000)
  cy.get('#repurchase-step1 > .modal-footer > .btn').click()
  cy.get('#repurchase-step2 > .modal-footer > .btn').click()
  cy.visit('/home/summary')
  cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
  cy.contains('Log out').click() 
  cy.clearCookies()
  cy.getCookies().should('be.empty')
})
})