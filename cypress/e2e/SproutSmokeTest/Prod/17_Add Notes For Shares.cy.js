 /// <reference types="cypress"/>

 describe('SproutSmokeTest',()=>{
  beforeEach(() => {
      cy.viewport('macbook-16')
      cy.visit('https://www.getsprout.co')
      cy.get('#hs-eu-confirmation-button').click()
      cy.login('mzhuang2019@gmail.com','Mike_1983')
    })

  it('1.17 Add Notes for Shares',()=>{
  cy.wait(1000)
  //Step1: go to shares page, and find a certain certificate, open menu, click add Notes
  cy.visit('/home/securities/shares')
  cy.wait(9000)
  cy.get('[data-row-key="8552"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
  cy.get('.ant-dropdown-menu > :nth-child(7) > a').click()
  //Step2: Clear the current content, then type 'TestFromMike' and click Save button
  cy.get('.tab-content > .modal-content > .modal-body > .form-control')
    .clear()
    .wait(1000)
    .type('TestFromMike')
    .wait(1000)
  cy.contains('Save admin notes').click()
  cy.wait(1100)
  //Go to certificate details page, check the notes area have 'TestFromMike'
  cy.visit('/home/captable/byshareclass')
  cy.contains('CSB').click()
  cy.contains('Feng Xu').click()
  cy.contains('CSB-2').click()
  cy.wait(1000)
  cy.get('.certificate-side-bar-menu > :nth-child(7)').click()
  cy.contains('TestFromMike').should('be.exist')
})
})