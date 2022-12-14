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
        cy.login('mikez.test003@gmail.com','Mike_1983')
      })
    it('1.11 Company Viewer login and permissions check',()=>{     
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
        cy.contains('Cap Table').should('be.visible')  
        cy.contains('Fundraising').should('be.visible')  
        cy.contains('Securities').should('be.visible')  
        cy.wait(2000)
        cy.contains('Data room').click()
        cy.wait(5000)
        cy.contains('Share Class Documents').should('be.exist')
        cy.contains('Bylaws').should('be.visible')
        cy.contains('Board').should('be.visible').click()
        cy.contains('No Data').should('be.visible')
        cy.contains('Access logs').click()
        cy.contains('MikezTest003').should('exist')
        cy.contains('Entered Board').should('exist')
        cy.get('.close').click()
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
