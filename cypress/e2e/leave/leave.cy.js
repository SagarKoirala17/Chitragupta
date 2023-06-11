import { credentials } from "../credentials"
import '../leave/leave_table'
describe('Leave Table Components',()=>{
    
        beforeEach(() => {
            cy.login(credentials.email, credentials.password)
          })
          it('Assert the Leave table',()=>{
            cy.get('.h-full').should('be.visible').click()
            cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click()
            cy.get('.text-gray-800').should('have.text','Leave Request List')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.justify-between.md\\:justify-start.space-x-3 > div > button").should('be.visible')
            cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.md\\:space-y-0.space-x-4 > button.inline-flex.items-center.justify-center.rounded-md.border.border-transparent.px-2.lg\\:px-2.py-2.text-sm.font-medium.text-white.shadow-sm.focus\\:outline-none.sm\\:w-auto.bg-amber-500.hover\\:bg-amber-600").should('be.visible')
            cy.get('#headlessui-switch-4').should('be.visible')
            cy.get('.flex > .block').should('have.text','All Leaves')
            cy.AssertLeaveTable()
    })
    it.only('Create the new leave via employee list',()=>{
     // Get today's date
        const today = new Date();

// Generate a random number of days between 1 and 30
        const randomNumberOfDays = Math.floor(Math.random() * 30) + 1;

// Add the random number of days to today's date
        today.setDate(today.getDate() + randomNumberOfDays);

// Get the month, day, and year components from the generated date
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();

// Construct the random date string in the format YYYY-MM-DD
        const randomDate = `${year}-${month}-${day}`;

        console.log(randomDate);


        cy.get('.h-full').should('be.visible').click()
        cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click()
        cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.justify-between.md\\:justify-start.space-x-3 > div > button").click()
        cy.get('.css-13cymwt-control').type('Subas Poudel')
        cy.get('.relative > #start_date').type(randomDate)
        cy.get('.relative > #end_date').type(randomDate)
        cy.get('#reason').type('He/She is sick')
        cy.get('#reply').type('Leave is granted')
        let half_day=Math.round(Math.random())
        if(half_day==1){
          cy.get('#headlessui-switch-8').click()
        }
        cy.get('.px-4 > .inline-flex > span').click()
        
        
            

    })
  })