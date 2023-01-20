 /// <reference types="cypress"/>

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

  it('1.17 Add Notes for Shares',()=>{
  cy.wait(2000)
  cy.visit('/home/securities/shares')
  cy.get('[data-row-key="8552"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
  cy.get('.ant-dropdown-menu > :nth-child(7) > a').click()
  cy.get('.tab-content > .modal-content > .modal-body > .form-control')
    .clear()
    .wait(2000)
    .type('TestFromMike')
    .wait(2000)
  cy.contains('Save admin notes').click()
  cy.wait(1100)
  cy.visit('/home/captable/byshareclass')
  cy.contains('CSB').click()
  cy.contains('Feng Xu').click()
  cy.contains('CSB-2').click()
  cy.wait(1000)
  cy.get('.certificate-side-bar-menu > :nth-child(7)').click()
  cy.contains('TestFromMike').should('be.exist')
})
})