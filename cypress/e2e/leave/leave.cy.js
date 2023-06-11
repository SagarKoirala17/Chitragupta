import { credentials } from "../credentials"
import '../leave/leave_table'
describe('Leave Table Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
          it.only('Assert the Leave table',()=>{
            cy.get('.h-full').should('be.visible').click()
            cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click()
            cy.get('.text-gray-800').should('have.text','Leave Request List')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.justify-between.md\\:justify-start.space-x-3 > div > button").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.md\\:space-y-0.space-x-4 > button.inline-flex.items-center.justify-center.rounded-md.border.border-transparent.px-2.lg\\:px-2.py-2.text-sm.font-medium.text-white.shadow-sm.focus\\:outline-none.sm\\:w-auto.bg-amber-500.hover\\:bg-amber-600").should('be.visible')
            cy.get('#headlessui-switch-4').should('be.visible')
            cy.get('.flex > .block').should('have.text','All Leaves')
            cy.AssertLeaveTable()
    })
  
  })