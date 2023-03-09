 /// <reference types="cypress"/>

 describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.14 Modify a Certificate',()=>{
    cy.wait(2000)
    // Step1: go to Shares find a certain share, click the menu button and select Modify certificate
    cy.visit('/home/securities/shares')
    cy.get('[data-row-key="8552"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Modify certificate').click()
    //Step2: select reason for modify and note"Test from Mike"
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyReason > .modal-footer > .btn').click()
    //Step3: in the modify page, change the qunaity to '1' and save
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(3) > .form-control').type('1')
    cy.get('#modifyValue > .modal-footer > .btn').click()
    cy.get('#reviewModifications > .modal-footer > .btn').click()
    cy.wait(1000)
    cy.get('#reviewModifications > .modal-header > .close').click()
    cy.wait(1000)
    //Step4: check number 1 shows in the shares page
    cy.contains('1').should('be.exist')
    //Step5: go to cap table, find the certificate details page, check the number '1' shows
    cy.visit('home/captable/byshareclass')
    cy.wait(2000)
    cy.contains('CSB').click()
    cy.wait(2000)
    cy.contains('Feng Xu').click()
    cy.contains('CSB-2').click()
    cy.contains('1').should('be.exist')
    //Step6: back to share, find the same share, change the qunaity to 123456
    cy.visit('/home/securities/shares')
    cy.get('[data-row-key="8552"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.contains('Modify certificate').click()
    cy.get(':nth-child(1) > .row > .col-xs-4 > .form-control').select('Clerical error')
    cy.get('.padding2026026 > :nth-child(2) > .row > .col-xs-6 > .form-control').type('Test From Mike')
    cy.get('#modifyReason > .modal-footer > .btn').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(1) > .check-box > label').click()
    cy.get(':nth-child(2) > .table > tbody > :nth-child(4) > :nth-child(3) > .form-control').type('123456')
    cy.get('#modifyValue > .modal-footer > .btn').click()
    cy.get('#reviewModifications > .modal-footer > .btn').click()
    cy.wait(5000)
    //Step7: after the qunaity changed, save and verify the change works.
    cy.contains('123,456')
    cy.visit('/home/summary')
    cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})