

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
    
      it('1.5 Cap Table Menu items Check',()=>{
        cy.wait(2000)
        cy.contains('Cap table').trigger('mouseover')
        cy.contains('By share class').click()
        cy.contains('View cap table as of').should('be.exist')
        cy.get('.ant-collapse-header').eq('0').click()
        cy.get('.ant-collapse-item').eq('0').click()
        cy.get('.ant-collapse-content-box > .ant-collapse > :nth-child(1) > .ant-collapse-header > .certificate-content-header > .header-name').click()
        cy.get('.table-total-td-first').should('be.exist')
        cy.contains('Cap table').trigger('mouseover')
        cy.contains('By stakeholder').click()
        cy.wait(20000)
        cy.get('.stake-holder-content-first').should('be.exist')
        cy.contains('Cap table').trigger('mouseover')
        cy.contains('By voting power').click()
        cy.contains('Rounds').should('be.exist')
        cy.contains('Cap table').trigger('mouseover')
        cy.contains('Rights and preferences').click()
        cy.contains('Share class details').should('be.exist')
        cy.wait(2000)
        cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})



