
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
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

      it('1.6 Fundraising Menu items check',()=>{
        cy.contains('Fundraising').click()
        cy.contains('Financing history').click()
        cy.contains('Funding rounds').should('be.exist')
        cy.contains('Round').should('be.exist')
        cy.contains('Cash raised').eq('0').click()
        cy.contains('Security').should('be.exist')
        cy.contains('Scenario modeling').click()
        cy.wait(20000)
        cy.contains('Round Modeling').should('be.exist')
        cy.contains('Waterfall').click()
        cy.contains('Create new Scenario model').should('be.exist')
        cy.get('.new-scenario-modeling-header > :nth-child(1) > span').click()
        cy.wait(20000)
        cy.get('.new-financing-round-terms > span').click()
        cy.contains('Advanced Terms')
        cy.contains('Save Advanced Terms').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input').type(1000000)
        cy.wait(1000)
        cy.get(':nth-child(2) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input').type(1)
        cy.wait(1000)
        cy.get(':nth-child(3) > .ant-input-group-wrapper > .ant-input-wrapper > .ant-input').type(2000000)
        cy.wait(1000)
        cy.get('.ant-picker-input').click()
        cy.contains('Today').click()
        cy.contains('Save').click()
        cy.get('.close').click()
        cy.contains('Current Cap table').should('be.exist')
        cy.contains('Wire instructions').click()
        cy.get('textarea').clear().type('TestFromMike')
        cy.contains('Update wire instructions').click()
        cy.contains('TestFromMike').should('be.exist')
        cy.get('.glyphicon-user').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})