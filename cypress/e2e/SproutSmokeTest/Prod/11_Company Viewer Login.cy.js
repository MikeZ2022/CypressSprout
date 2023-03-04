///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mikez.test003@gmail.com','Mike_1983')
      })
    it('1.11 Company Viewer login and permissions check',()=>{  
       // Step1: Company viewer login and check the Suammry menu is vsible but Permission and Account users is not exist
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('not.exist')
        cy.contains('Account users').should('not.exist')
        cy.contains('Cap Table').should('be.visible')  
        cy.contains('Fundraising').should('be.visible')  
        cy.contains('Securities').should('be.visible')  
        cy.wait(2000)
        // Step2: go to data room, check the default folder is visible for company viewer
        cy.visit('home/datarooms')
        cy.wait(3000)
        cy.contains('Share Class Documents').should('be.exist')
        cy.contains('Bylaws').should('be.visible')
        //Step3: Click to open Board folder, and check the access log, this 'Entered folder' log exist
        cy.contains('Board').should('be.visible').click()
        cy.contains('No Data').should('be.visible')
        cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('Access logs').click()
        cy.contains('MikezTest003').should('exist')
        cy.contains('Entered Board').should('exist')
        cy.get('.close').click()
        cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
