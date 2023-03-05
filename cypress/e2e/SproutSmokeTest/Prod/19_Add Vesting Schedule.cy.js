 /// <reference types="cypress"/>

 describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.19 Add and Remove Vesting Schedule',()=>{
    cy.wait(2000)
    //Step1: Go to shares page, and find a certain certificate, open menu and click Add vesting schedule
    cy.visit('/home/securities/shares')
    cy.get('[data-row-key="8552"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    //Step2: Schedule plan choose'sdsd', and date choose 'Today' 
    cy.get('#schedule_step1 > .modal-body > .body-one > .form-horizontal > :nth-child(1) > .col-xs-7 > .form-control').select('sdsd')
    cy.get('#vesting_start_date > .ant-picker > .ant-picker-input > input').click()
    cy.contains('Today').click()
    cy.get('#schedule_step1 > .modal-footer > .btn').click()
    cy.wait(5000)
    //Step3: type 'Test From Mike' as note, then click to add the vesting schedule
    cy.get('.form-horizontal > .form-group > #reason_for_modification > .form-control').type('Test From Mike')
    cy.get('#schedule_step2 > .modal-footer > .btn').click()
    cy.get('#schedule_step3 > .modal-footer > .btn').click()
    //Step4: verify the chosen vesting schedule 'sdsd' display in shares page
    cy.contains('sdsd').should('be.exist')
    //Step5: go back to the same certificate and remove the vesting schedule
    cy.visit('/home/securities/shares')
    cy.get('[data-row-key="8552"] > .ant-table-cell-fix-right > .ant-dropdown-trigger').click()
    cy.get('.ant-dropdown-menu > :nth-child(2) > a').click()
    cy.get(':nth-child(2) > .form-group > .acceleration_terms_a').click()
    cy.get('#removeVestingSchedule > .modal-footer > :nth-child(2)').click()
    cy.wait(9000)
    //Step6: verify 'sdsd' is not visible in shares page
    cy.contains('sdsd').should('not.visible')
})
})