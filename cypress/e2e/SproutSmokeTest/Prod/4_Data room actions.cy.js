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
  it('1.4 Upload Share and delete file in Dataroom',()=>{   
      cy.wait(2000)
      cy.visit('home/datarooms')
      cy.url().should('contain','home/datarooms')
      cy.contains('Data Room').should('be.visible')
      cy.wait(3000)
      cy.contains('Summary').should('not.exist')  
      cy.contains('Permissions and roles').should('not.exist')
      cy.contains('Account users').should('not.exist')
      //Step1: create a test folder to do test
      cy.get('.ant-space > :nth-child(1) > .ant-btn').click()
      cy.get('.form-control').type('TestFolder')
      cy.get('.btn').click()
      cy.wait(8000)
      cy.contains('TestFolder').click()
      cy.contains('Upload').click()
      // Step2: add file to upload in data room
      cy.get('.ant-upload-drag > .ant-upload')
        .selectFile('cypress/fixtures/TestFromMike.txt',{ action: 'drag-drop' })
      cy.get('.modal-footer > :nth-child(2)').click()
      cy.wait(10000)
      // Step3: verify the text file uploaded successfully
      cy.contains('TestFromMike')
      // Step4: click to rename the new upload file
      cy.get(':nth-child(3) > a').eq(0).click()
      cy.get('.form-control').type('NewNameForTest')
      cy.get('.btn').click()
      cy.wait(7000)
      cy.contains('NewNameForTest')
      cy.wait(1000)
      //Step5: click to delete the new upload file
      cy.get(':nth-child(5) > a').eq(0).click()
      cy.get('.modal-footer > :nth-child(1)').click()
      cy.wait(10000)
      cy.go('back')
      //Step6: search all test folders/files, delete them all
      cy.get('.ant-input').type('Test')
      cy.get(':nth-child(5) > a').eq(0).click()
      cy.get('.modal-footer > :nth-child(1)').click()
      cy.wait(2200)
      cy.get('.sprout-header-task-wrap > .ant-dropdown-trigger').click()
      cy.contains('Log out').click() 
      cy.clearCookies()
      cy.getCookies().should('be.empty')
    })
})
