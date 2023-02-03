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

    it('1.30 CN redeem to cash',()=>{
    cy.wait(2000)
    cy.visit('/home/securities/convertibles')
    cy.get('[data-row-key="11961"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(8) > a').click()
    cy.get('.ant-input-wrapper > .ant-input').type('1')
    cy.get('.ant-form-item-control-input-content > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('.modal-footer > .ant-btn').click()
    cy.wait(1000)
    cy.contains('Redeem to cash')
    cy.wait(1000)
    cy.get('[data-row-key="11961"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.wait(2000)
    cy.contains('Redeem to cash').should('not.visible')
})
})