// <reference types="cypress"/>

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

    it('1.24 Filter function in Shares',()=>{
    cy.contains('Securities').click()
    cy.contains('Shares').click()
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('Anna{enter}')
    cy.get(':nth-child(1) > .ant-form-item-label > label').click()
    cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('CSA{enter}')
    cy.get(':nth-child(2) > .ant-form-item-label > label').click()
    
    cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
      .click()
      .wait(1000)
      .type('No{enter}')
    cy.get(':nth-child(4) > .ant-form-item-label > label').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('3').should('be.exist')
    cy.get('.ant-badge > .ant-btn').click()
    cy.get(':nth-child(13) > :nth-child(2)').click()
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click()
    cy.contains('4').should('be.exist')
    cy.contains('Anna Sun').should('exist')
    cy.contains('Feng Xu').should('not.visible')
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
    cy.wait(2200)
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})