
      ///<reference types="cypress"/>

      describe('SproutSmokeTest',()=>{
        beforeEach(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.viewport('macbook-13')
            cy.wait(500)
            cy.visit('https://www.getsprout.co')
            cy.get('#hs-eu-confirmation-button').click()
            cy.get('#menu-item-1142').click()
            cy.get('.sprout-auth-form').find('[type="text"]').type('mzhuang2019@gmail.com')
            cy.get('.sprout-auth-form').find('[type="password"]').type('Mike_1983')
            cy.get('.sprout-auth-bth').click()
          })
    
        it('7_User Browse Fundraising Menu',()=>{
        cy.contains('Securities').click()
        cy.contains('Shares').should('be.visible')
        cy.contains('Share Option Awards')
        cy.contains('Warrants')
        cy.contains('Share Option Awards')
        cy.contains('Warrants')
        cy.contains('Convertibles')
        cy.contains('Templates')
        cy.wait(2000)
        cy.contains('Stakeholders').click()
        cy.contains('All stakeholders')
        cy.contains('Transactions')
        cy.contains('Stakeholder access')
        cy.wait(2000)
        cy.contains('Reports').click()
        cy.contains('Equity Reports')
        cy.wait(1000)
        cy.contains('Board').click()
        cy.clearCookies()
        cy.getCookies().should('be.empty')
})
})