
    /// <reference types="cypress"/>

     describe('SproutSmokeTest',()=>{
       beforeEach(() => {
           cy.viewport('macbook-15')
           cy.visit('https://www.getsprout.co')
           cy.get('#hs-eu-confirmation-button').click()
           cy.login('mzhuang2019@gmail.com','Mike_1983')
         })
   
       it('1.8 Stakeholders Menu items check',()=>{
       cy.wait(2000)
       //Step1: Check the all stakeholders menu items text display correctly
       cy.contains('Stakeholders').trigger('mouseover')
       cy.contains('Stakeholder').should('be.visible')
       cy.contains('All stakeholders').click()
       cy.wait(2000)
        //Step2: Check the Transactions menu items text display correctly
       cy.contains('Stakeholders').trigger('mouseover')
       cy.wait(1000)
       cy.contains('Transactions').click()
       cy.contains('Security').should('be.exist')
       cy.wait(15000)
       //Step3: Check the Stakeholder access menu items text display correctly
       cy.contains('Stakeholders').trigger('mouseover')
       cy.wait(1000)
       cy.contains('Stakeholder access').click()
       cy.wait(14000)
       cy.contains('Rounds').should('be.exist')
       cy.wait(2000)
       //Step4: Check the Equity reports menu items text display correctly
       cy.contains('Reports').trigger('mouseover')
       cy.contains('Equity reports').should('be.exist')
       cy.wait(1000)
       //Step5: Check the Board menu items text display correctly
       cy.contains('Board').trigger('mouseover')
       cy.contains('Documents').should('be.exist')
       cy.contains('Meetings').should('be.exist')
       cy.contains('Consents').should('be.exist')
       cy.contains('Notifications').should('be.exist')
       cy.clearCookies()
       cy.getCookies().should('be.empty')
})
})