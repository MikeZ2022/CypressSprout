///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mikez.test002@gmail.com','Mike_1983')
      })
    it('1.10 Company Editor login and permissions check',()=>{   
        cy.wait(2000)
        //Step1: Check the company editor user can see Summary/Permissions/Settings, and then click to open Data room
        cy.get('.ant-menu-submenu-selected > .ant-menu-submenu-title').trigger('mouseover')
        cy.contains('Summary').should('be.visible')  
        cy.contains('Permissions and roles').should('be.visible')
        cy.contains('Settings').should('be.visible')
        cy.contains('Data room').click()
        cy.wait(5000)
        //Step2: create new folder in data room,type 'Cypress' as folder name, and save
        cy.contains('New folder').click()
        cy.get('.form-control').type('Cypress')
        cy.get('.dataroom-btnReset')
          .click()
        //Step3: find the new created cypress folder, and click to open it, check no data shows
        cy.contains('Cypress').eq('0').click()
        cy.contains('No Data').should('be.visible')
        //Step4: Find cypress folder from search field, and delete cypress folder 
        cy.contains('Data Room').click()
        cy.get('.ant-input')
          .click()
          .wait(1000)
          .type('Cypress')
        cy.contains('Delete').click()
        cy.contains('Yes').click()
        //Step5: check the cypress folder is not exist, new folder and access logs button still showing 
        cy.contains('Cypress').should('not.exist')
        cy.contains('New folder').should('be.visible')
        cy.contains('Access logs').should('be.visible')
        cy.wait(2000)
        cy.contains('Documents').should('be.visible')
        cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
