// <reference types="cypress"/>

describe('SproutSmokeTest',()=>{
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.visit('https://www.getsprout.co')
        cy.get('#hs-eu-confirmation-button').click()
        cy.login('mzhuang2019@gmail.com','Mike_1983')
      })

    it('1.26 Portfolio view',()=>{
    cy.wait(2000)
    //Step1: Go to options page
    cy.contains('Securities').trigger('mouseover')
    cy.wait(1000)
    cy.contains('Share option awards').click()
    //Step2: use search check there are canceled options under stakeholder 'miketest'
    cy.get('.ant-input').type('miketest{enter}')
    cy.contains('Canceled')
    //Step3: go to portfolio page, and check the account have canceled certificate and the name'mikeTest' and email show correctly
    cy.contains('Test company Mike').click()
    cy.contains('See More Portfolios').click()
    cy.get('.filter-item > .word-item').click()
    cy.get('.portfolio-btns > :nth-child(2)').click()
    cy.contains('Canceled')
    cy.contains('EA1-651').click()
    cy.contains('mikeTest').should('exist')
    cy.contains('mzhuang2019@gmail.com').should('exist')
    // Step4: back to portfolio view, and check another certificate is showing correct details/name/email
    cy.go('back')
    cy.get('.filter-item > .word-item').click()
    cy.get('.portfolio-btns > :nth-child(3)').click()    
    cy.contains('CSA').click()
    cy.contains('Feng Xu').click()
    cy.contains('CSA-2').click()
    cy.contains('feng.xu+9997@getsprout.co').should('exist')
    cy.go('back')
    cy.wait(2200)
    cy.visit('/home/summary')
    cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
    cy.contains('Log out').click() 
    cy.clearCookies()
    cy.getCookies().should('be.empty')
})
})