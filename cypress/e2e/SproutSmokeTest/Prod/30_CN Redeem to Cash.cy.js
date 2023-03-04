 /// <reference types="cypress"/>

 describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.30 CN redeem to cash',()=>{
    cy.wait(2000)
    //Step1: Go to Convertibles, find a certain CN, click the menu, and chosse Redeem to cash
    cy.visit('/home/securities/convertibles')
    cy.get('[data-row-key="11961"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(8) > a').click()
    //Step2: number field type 1, and date chose Today, then save the change
    cy.get('.ant-input-wrapper > .ant-input').type('1')
    cy.get('.ant-form-item-control-input-content > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('.modal-footer > .ant-btn').click()
    cy.wait(1000)
    //Step3: check the CN status changed to redeem to cash
    cy.contains('Redeem to cash')
    cy.wait(1000)
    //Step4: Find the same CN, and click the menu, choose 'Reverse cancellation'
    cy.get('[data-row-key="11961"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.wait(2000)
    //Step5: check the Redeem to cash status is not visible
    cy.contains('Redeem to cash').should('not.visible')
})
})