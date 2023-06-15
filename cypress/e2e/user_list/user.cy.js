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
      it('Invite the User',()=>{
          cy.ClickSidebarViewButton()
          cy.ClickUserButton()
          cy.InviteUser()

      })
        it.only('Negative Testing for Bulk Upload',()=>{
          cy.ClickSidebarViewButton()
          cy.ClickUserButton()
          cy.BulkUploadUser()
          

        })
    })
