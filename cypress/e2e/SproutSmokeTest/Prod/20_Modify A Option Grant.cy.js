/// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.20 Modify a Option grant',()=>{
    cy.wait(1000)
    //Step1: go to option page, and find a certain certificate, open menu, and select Modify a Option
    cy.contains('Securities').trigger('mouseover')
    cy.wait(1000)
    cy.contains('Share option awards').click()
    cy.wait(8000)
    cy.get('[data-row-key="8554"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(1) > a').click()
    //Step2: Choose reason 'Clerical error' and type note 'Test From Mike',then modify the quanity to '1'
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyOptionReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(1) > .check-box > label').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(3) > .form-control').type('1')
    cy.wait(1000)
    //Step3: Save the change and go to cetificate details, find the certificate check it's quanity changed to '1' as expect
    cy.get('#modifyOptionValue > .modal-footer > .btn').click()
    cy.get('#reviewOptionModifications > .modal-footer > .btn').click()
    cy.wait(1000)
    cy.contains('1').should('be.exist')
    cy.contains('Cap table').click()
    cy.contains('By share class').click()
    cy.contains('CSA').click()
    cy.contains('Anna Sun').click()
    cy.contains('CSA-30').click()
    cy.contains('1').should('be.exist')
    //Step4: go back to option page, and find the same certificate,open menu, click Modify option
    cy.visit('/home/securities/stock-option-awards')
    cy.wait(2000)
    cy.get('[data-row-key="8554"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(1) > a').click()
    //Step5: change the quanity to 123, and save it
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyOptionReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(6) > :nth-child(3) > .form-control').type('123')
    cy.wait(1000)
    cy.get('#modifyOptionValue > .modal-footer > .btn').click()
    cy.get('#reviewOptionModifications > .modal-footer > .btn').click()
    cy.wait(2000)
    //Step6: verify the quanity changed to 123
    cy.contains('123').should('exist')
})
})