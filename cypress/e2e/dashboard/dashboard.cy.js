import { credentials } from "../credentials"
describe('Dashboard Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
        
        it('Assert the Dashboard page',()=>{
            cy.get('.md\:col-span-4 > :nth-child(1)').should('be.visible')

        })
})