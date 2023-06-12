import { credentials } from "../credentials"
import '../user_profile/user_profile'
describe('User Profile Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
        
        it('Assert the user profile page',()=>{
          cy.wait(5000)
          cy.ClickUsername()
          
          cy.ClickYourProfileButton()

        })
    })