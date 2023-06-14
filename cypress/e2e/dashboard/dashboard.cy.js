import { credentials } from "../credentials"
describe('Dashboard Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
        
        it('Assert the Dashboard page',()=>{
        
            //Assert the number of employees container
            cy.wait(5000); // Wait for 5 seconds (adjust as necessary)
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section").should('be.visible')  
            //Assert all the containers in admin dashboard page
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div:nth-child(2)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div:nth-child(3)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div:nth-child(4)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div.bg-white.shadow-sm.px-5.py-4.rounded.max-h-lg").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div.bg-white.shadow-sm.px-5.py-4.rounded.col-span-2").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section:nth-child(2) > div > div:nth-child(1)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section:nth-child(2) > div > div:nth-child(2)").should('be.visible')
        })
})