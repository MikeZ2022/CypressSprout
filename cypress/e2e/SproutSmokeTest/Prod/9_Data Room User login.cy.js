///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mikez.test001@gmail.com','Mike_1983')
      })
    it('1.9 Data Room user login and permissions check',()=>{   
        // Step1:login as an Data room user, and go to data room, check the permissions
        // Data room is display correctly, and Suammry/Permissions/Account users items no show to data room user 
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
