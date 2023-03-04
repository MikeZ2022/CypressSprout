///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mikez.test005@gmail.com','Mike_1983')
      })
    it('1.13 Share Class Admin login and permissions check',()=>{   
        // Step1: Share class admin user login, and check the Suammry is visible, but Permissions and Account users are not visible
        cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
        //Step2: Cap table and Securities menu is visible for Share class admin user
        cy.contains('Cap table').should('be.visible')
        cy.contains('Securities').should('be.visible')
        //Step3: click to go to data room, check the 'Need grant access' page shows
        cy.contains('Data room').click()
        cy.contains('Please get in touch with the company admin to grant access.')
        cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
