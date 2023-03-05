 /// <reference types="cypress"/>

 describe('SproutSmokeTest',()=>{
  beforeEach(() => {
      cy.viewport('macbook-16')
      cy.visit('https://www.getsprout.co')
      cy.get('#hs-eu-confirmation-button').click()
      cy.login('mzhuang2019@gmail.com','Mike_1983')
    })

  it('1.7 Securities Menu items check',()=>{
  cy.wait(2000)
  //Step1: Go to Shares menu, and check the main items text display correctly
  cy.visit('home/securities/shares')
  cy.contains('Manage share classes').should('be.exist')
  cy.contains('Manage vesting').should('be.exist')
  cy.contains('Draft shares').should('be.exist')
  //Step2: Go to option menu, and check the main items text display correctly
  cy.contains('Securities').trigger('mouseover')
  cy.wait(1000)
  cy.contains('Share option awards').click()
  cy.contains('Manage equity plans').should('be.exist')
  //Step3: Go to Warrants menu, and check the main items text display correctly
  cy.contains('Securities').trigger('mouseover')
  cy.contains('Warrants').click()
  cy.contains('Manage warrant blocks').should('be.exist')
  //Step4: Go to Convertibles menu, and ckeck the main items text display correctly
  cy.contains('Securities').trigger('mouseover')
  cy.contains('Convertibles').click()
  cy.contains('Manage convertible terms').should('be.exist')
  cy.contains('Securities').trigger('mouseover')
  cy.contains('Securities settings').click()
  cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
  cy.contains('Log out').click() 
  cy.clearCookies()
  cy.getCookies().should('be.empty')
})
})