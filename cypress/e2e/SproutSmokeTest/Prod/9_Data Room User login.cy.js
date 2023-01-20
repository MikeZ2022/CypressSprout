///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mikez.test001@gmail.com','Mike_1983')
      })
    it('1.9 Data Room user login and permissions check',()=>{   
        cy.url().should('contain','home/datarooms')
        cy.contains('Data Room').should('be.visible')
        cy.wait(5000)
        cy.contains('Summary').should('not.exist')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
        cy.wait(2000)
        cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
