///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mikez.test004@gmail.com','Mike_1983')
      })
    it('1.12 ESOP admin login and permissions check',()=>{   
      // Step1: Esop admin user login, and check the Summary menu visible but Permission and Account users are not visible
        cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
        cy.wait(2000)
        //Step2: go to data room, check the prepared folder PGA-111 (invited by another super admin account) is visible
        cy.contains('Data room').click()
        cy.contains('PGA-111').should('be.visible')
        //Step3: Esop admin user can see Cap table and Securities menu
        cy.contains('Cap table').should('be.visible')
        cy.contains('Securities').should('be.visible')
        cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
