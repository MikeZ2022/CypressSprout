///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.viewport('macbook-13')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })
    it('1.4 Company summary Menu items check',()=>{   
        cy.get('li .ant-menu-submenu-title')
        cy.wait(5000)
        cy.contains('Summary').click()   
        cy.contains('Permissions and roles').click()
        cy.contains('Account users').should('be.exist')
        cy.contains('Data room').should('be.visible')
        cy.contains('Settings') .should('be.visible')
        cy.wait(2000)
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
