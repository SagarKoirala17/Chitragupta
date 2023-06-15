import { credentials } from "../credentials"
import '../user_list/user'
describe('User List Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
        
        it('Assert the User List Page',()=>{
            cy.ClickSidebarViewButton()
            cy.ClickUserButton()
            cy.AssertUserComponents()
      })
    })
