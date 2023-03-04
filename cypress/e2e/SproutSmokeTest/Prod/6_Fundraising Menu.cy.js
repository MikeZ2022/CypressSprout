
///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

      it('1.6 Fundraising Menu items check',()=>{
        cy.wait(1000)
        //Step1: Go through fundraising menu, and check financing history page is dispalyed
        cy.contains('Fundraising').trigger('mouseover')
        cy.wait(1000)
        cy.contains('Financing history').click()
        cy.contains('Funding rounds').should('be.exist')
        cy.contains('Round').should('be.exist')
        //Step2: From fundraising menu, click Cash raised
        cy.contains('Fundraising').trigger('mouseover')
        cy.contains('Cash raised').eq('0').click()
        cy.contains('Security').should('be.exist')
        //Step3: From fundraising menu, click the scenario modeling
        cy.contains('Fundraising').trigger('mouseover')
        cy.contains('Scenario modeling').click()
        cy.wait(10000)
        //Step4: Check the round modeling is display
        cy.contains('Round Modeling').should('be.exist')
        //Step5: From fundraising menu, click Waterfall modeling
        cy.contains('Fundraising').trigger('mouseover')
        cy.contains('Waterfall').click()
        //Step6: Check the Create new model button is exist, and create a new scenario model
        cy.contains('Create new Scenario model').should('be.exist')
        cy.get('.new-scenario-modeling-header > :nth-child(1) > span').click()
        cy.wait(10000)
        cy.get('.new-financing-round-terms > span').click()
        cy.contains('Advanced Terms')
        cy.contains('Save Advanced Terms').click()
        cy.wait(1000)
        //Step7: In scenario modelling page, type '1000000' in Pre-money valuation, type'1' in Available post-money option pool, type'2000000' in Total new investment
        //Then Save
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
        //Step8: Click Wire instrutions and type 'TestFromMike' in the textarea, then check this text can be saved
        cy.contains('Current Cap table').should('be.exist')
        cy.contains('Fundraising').trigger('mouseover')
        cy.contains('Wire instructions').click()
        cy.get('textarea').clear().type('TestFromMike')
        cy.contains('Update wire instructions').click()
        cy.contains('TestFromMike').should('be.exist')
        cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
        cy.contains('Log out').click() 
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})