import { credentials } from "../credentials"

describe('Dashboard Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
        
        it('Assert the Dashboard page',()=>{
        
            //Assert the number of employees container
            cy.wait(5000); // Wait for 5 seconds (adjust as necessary)
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section").should('be.visible')  
            //Assert all the pages in admin dashboard page
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div:nth-child(2)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div:nth-child(3)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div:nth-child(4)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div.bg-white.shadow-sm.px-5.py-4.rounded.max-h-lg").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section.grid.grid-cols-1.xl\\:grid-cols-3.gap-y-3.xl\\:gap-3.text-sm > div > div.bg-white.shadow-sm.px-5.py-4.rounded.col-span-2").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section:nth-child(2) > div > div:nth-child(1)").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > section > section > section.xl\\:col-span-8 > section:nth-child(2) > div > div:nth-child(2)").should('be.visible')
        })
        it.only('Assert the Leave table',()=>{
          cy.get('.h-full').should('be.visible').click()
          cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click()
          cy.get('.text-gray-800').should('have.text','Leave Request List')
          cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.justify-between.md\\:justify-start.space-x-3 > div > button").should('be.visible')
          cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.md\\:space-y-0.space-x-4 > button.inline-flex.items-center.justify-center.rounded-md.border.border-transparent.px-2.lg\\:px-2.py-2.text-sm.font-medium.text-white.shadow-sm.focus\\:outline-none.sm\\:w-auto.bg-amber-500.hover\\:bg-amber-600").should('be.visible')
          cy.get('#headlessui-switch-4').should('be.visible')
          cy.get('.flex > .block').should('have.text','All Leaves')
  })

})