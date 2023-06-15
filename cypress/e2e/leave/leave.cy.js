import { credentials } from "../credentials"
import '../leave/leave_table'
import 'cypress-file-upload';


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
    it('Create the new leave via employee list',()=>{
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
    it('Cancel the request',()=>{
      let arrays=[]
      cy.get('.h-full').should('be.visible').click()
      cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click()
      cy.get('.min-w-full > .bg-white > :nth-child(n) > :nth-child(1)').each((index)=>{
        let array=index.text().trim()
        arrays.push(array)

      }).then(()=>{
        console.log(arrays)
        let random_cancel = Math.floor(Math.random() * (arrays.length - 1)) + 1;
        console.log(random_cancel)
        cy.get(`.min-w-full > .bg-white > :nth-child(${random_cancel}) > :nth-child(1)`).click()
        cy.get('form > :nth-child(2) > .bg-amber-500').click()
        cy.get('#reason').type('I have had enough of holidays')
        cy.get('.my-3 > .inline-flex').click()
        cy.get('.bg-amber-500').click()
        cy.get('.min-w-full > .px-4 > :nth-child(1) > :nth-child(1)').click()
        cy.get('.bg-teal-600').click()

        
        })  
})
it('All leaves toggle button functionality when toggle button is off', () => {
  let date = new Date();
  let date_arrays = [];

  cy.get('.h-full').should('be.visible').click();
  cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click();
  
  cy.get('.bg-white > :nth-child(n) > :nth-child(4)').each(($index) => {
    let date_value = $index.text().trim();
    date_arrays.push(new Date(date_value));
  }).then(() => {
    console.log(date_arrays);
    for (let i = 0; i < date_arrays.length; i++) {
      expect(date_arrays[i]).to.be.gte(date);
    }
  });
});
it('Negative Assertion for Bulk Upload',()=>{
  let p='3.jpg'
  cy.get('.h-full').should('be.visible').click();
  cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click();
  cy.get("#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.md\\:flex.items-center.justify-between.mx-3.mb-3.md\\:space-x-6.space-x-0.space-y-2.md\\:space-y-0.lg\\:mb-7 > div.flex.items-center.md\\:space-y-0.space-x-4 > button.inline-flex.items-center.justify-center.rounded-md.border.border-transparent.px-2.lg\\:px-2.py-2.text-sm.font-medium.text-white.shadow-sm.focus\\:outline-none.sm\\:w-auto.bg-primary.hover\\:bg-primary-dark").click()
  cy.get('#leave-file-upload').attachFile(p)
  cy.get('.p-4 > .flex > .bg-primary').click()
  cy.get('.flex-col > .w-full > .p-4').should('be.visible')
})
it.only('Approve the Pending Request', () => {
  let paid_leave,sick_leave, unpaid_leave, sick, paid, unpaid 
  let arrays=[]
  cy.get('.h-full').should('be.visible').click();
  cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(2) > li > div > div > button > span.ml-4.font-medium").click();

  // Wait for the dropdown options to be loaded

  // Select the option with value 'pending' from the dropdown
  cy.get('#status').select('Pending')
  cy.wait(5000)
  cy.get(':nth-child(n) > :nth-child(8) > .text-yellow-500').each(($index)=>{
    let array=$index.text().trim()
    arrays.push(array)

  }).then(()=>{
    console.log(arrays)
    let random_cancel = Math.floor(Math.random() * (arrays.length - 1)) + 1;
    cy.get(`.min-w-full > .bg-white > :nth-child(${random_cancel}) > :nth-child(1)`).click()
    cy.wait(5000)
    cy.get('.p-6 > :nth-child(3) > .mt-1').invoke('val').then(selectedValue => {
      let selectedOption = selectedValue.trim();
      // Do something with the selected value
      cy.log(`Selected value: ${selectedOption}`);
    
      if(selectedOption='sick_leave'){
        cy.get(':nth-child(1) > .text-xl').then(($index)=>{
          sick_leave=$index.text()
          console.log(sick_leave)
        })
        cy.get(':nth-child(2) > .text-xl').then(($index)=>{
          paid_leave=$index.text()
          console.log(paid_leave)
        })
        cy.get(':nth-child(3) > .text-xl').then(($index)=>{
          unpaid_leave=$index.text()
          console.log(unpaid_leave)
        })
        sick=parseFloat(sick_leave)
        paid=parseFloat(paid_leave)
        unpaid=parseFloat(unpaid_leave)
        cy.get('#reply').type('Your leave is granted')
        cy.get('.bg-teal-600').click()
        console.log(sick)
        if(sick==0){
          
        }
        

       
      }
        
      


      })
    
    
  })
});


})