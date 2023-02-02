
    /// <reference types="cypress"/>

     describe('SproutSmokeTest',()=>{
       beforeEach(() => {
           // Cypress starts out with a blank slate for each test
           // so we must tell it to visit our website with the `cy.visit()` command.
           // Since we want to visit the same URL at the start of all our tests,
           // we include it in our beforeEach function so that it runs before each test
           cy.viewport('macbook-15')
           cy.visit('https://www.getsprout.co')
           cy.get('#hs-eu-confirmation-button').click()
           cy.login('mzhuang2019@gmail.com','Mike_1983')
         })
   
       it('1.8 Stakeholders Menu items check',()=>{
       cy.wait(2000)
       cy.contains('Stakeholders').trigger('mouseover')
       cy.contains('Stakeholder').should('be.visible')
       cy.contains('All stakeholders').click()
       cy.wait(2000)
       cy.contains('Stakeholders').trigger('mouseover')
       cy.wait(1000)
       cy.contains('Transactions').click()
       cy.contains('Security').should('be.exist')
       cy.wait(15000)
       cy.contains('Stakeholders').trigger('mouseover')
       cy.wait(1000)
       cy.contains('Stakeholder access').click()
       cy.wait(14000)
       cy.contains('Rounds').should('be.exist')
       cy.wait(2000)
       cy.contains('Reports').trigger('mouseover')
       cy.contains('Equity reports').should('be.exist')
       cy.wait(1000)
       cy.contains('Board').trigger('mouseover')
       cy.contains('Documents').should('be.exist')
       cy.contains('Meetings').should('be.exist')
       cy.contains('Consents').should('be.exist')
       cy.contains('Notifications').should('be.exist')
       cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
       cy.contains('Log out').click() 
       cy.clearCookies()
       cy.getCookies().should('be.empty')
})
})