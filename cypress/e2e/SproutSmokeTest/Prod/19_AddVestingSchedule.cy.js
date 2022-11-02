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

    it('1.19 Add and Remove Vesting Schedule',()=>{
    cy.contains('Securities').click()
    cy.contains('Shares').click()
    cy.get('[data-row-key="8551"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.get('#schedule_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(1) > .col-xs-7 > .form-control').select('sdsd')
    cy.get('#vesting_start_date > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('#schedule_step1 > .modal-footer > .btn').click()
    cy.get('.form-horizontal > .form-group > #reason_for_modification > .form-control').type('Test From Mike')
    cy.get('#schedule_step2 > .modal-footer > .btn').click()
    cy.get('#schedule_step3 > .modal-footer > .btn').click()
    cy.contains('sdsd').should('be.exist')
    cy.visit('https://app.getsprout.co/home/securities/shares')
    cy.get('[data-row-key="8551"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.get(':nth-child(2) > .form-group > .acceleration_terms_a').click()
    cy.get('#removeVestingSchedule > .modal-footer > :nth-child(2)').click()
    cy.wait(2000)
    cy.contains('sdsd').should('not.visible')
    cy.visit('/home/summary')
    cy.get('.glyphicon-user').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})