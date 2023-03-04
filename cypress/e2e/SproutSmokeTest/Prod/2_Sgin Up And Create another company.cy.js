///<reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
      })
    
    it('1.2 Try to Sign Up using create another company',()=>{
        cy.get('#menu-item-1637 > a').click()
        cy.url().should('contain','app.getsprout.co/auth/signup')
        // Step 1: Click the Sign up button from Homepage, and check the website redirect to correct url
        cy.get('#user_name').type('TestFromMike')
        cy.wait(500)
        cy.get('#email').type('TestFromMike')
        cy.wait(500)
        cy.get('.sprout-signup-input-box > .ant-btn').click()
        // Step 2: Type sth in username and email filed and click the sign up button 
        cy.contains('Email is invalid').should('be.exist')
        // Step 3:
        cy.get('#title').type('Mike_1983')
        cy.wait(500)
        cy.get('#company_name').type('TestCompany')
        cy.wait(500)
        cy.get('#company_size').type('TestFromMike')
        cy.wait(500)
        cy.get('#comment')
          .type('TestFromMike')
        cy.wait(500)
        cy.go('back')
        cy.get('#menu-item-59')
          .click()
        cy.get('#name')
          .type('TestFromMike')
        cy.wait(500)
        cy.get('#email').type('TestFromMike')
        cy.wait(500)
        cy.get('#title').type('Mike_1983')
        cy.contains('Email address is invalid.').should('be.exist')
        cy.wait(500)
        cy.get('#company').type('TestCompany')
        cy.wait(500)
        cy.get('#share').type('TestFromMike')
        cy.wait(500)
        cy.get('#answer').type('TestFromMike')
        cy.contains('This field must be number')
          .should('be.exist')
        cy.wait(500)
        cy.visit('https://app.getsprout.co/auth/signup-another')
        cy.get('#email').type('mikez.test009@gmail.com')
        cy.get('#password').type('Mike_1983')
        cy.get('#title').type('Head of head')
        var timestamp = (new Date()).valueOf();
        cy.get('#company_name').type('MikeTest'+timestamp)
        cy.get('#company_size').type('11')
        cy.get('.ant-btn').click()
        cy.clearCookies()
        cy.getCookies().should('be.empty')
      })
})
