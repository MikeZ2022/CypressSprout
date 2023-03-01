
///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.visit('https://app-staging.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })
    
    it('1.31 Check the data',()=>{
        cy.get('#menu-item-1142').click()
        cy.get('.sprout-auth-form').find('[type="text"]').type('mzhuang2019@gmail.com')
        cy.get('.sprout-auth-form').find('[type="password"]').type('Mike')
        cy.get('.sprout-auth-bth').click()
        cy.wait(5000)
        cy.contains('password').should('be.exist')
        cy.get('.sprout-auth-form').find('[type="password"]').clear()
        cy.get('.sprout-auth-form').find('[type="password"]').type('Mike_1983')
        cy.get('.sprout-auth-bth').click()
        cy.get('.glyphicon-user').click()
       cy.contains('Log out').click()
       cy.clearCookies()
       cy.getCookies().should('be.empty')
      })
})