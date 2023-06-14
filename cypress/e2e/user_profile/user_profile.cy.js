import { credentials } from "../credentials"
import '../user_profile/user_profile'
describe('User Profile Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
        
        it('Update the user profile',()=>{
          cy.wait(5000)
          cy.ClickUsername()
          cy.ClickYourProfileButton()
          cy.BasicInformationContainer()
          cy.AssertBankInformation()
          cy.AssertCompanyInformationContainer()
          cy.ClickSaveButton()

        })
        it('Upload The profile picture',()=>{
          cy.wait(5000)
          cy.ClickUsername()
          cy.ClickYourProfileButton()
        })
    })