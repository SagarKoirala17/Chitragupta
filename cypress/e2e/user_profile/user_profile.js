import { generateRandomDate } from "../random_birthdate"
Cypress.Commands.add('ClickUsername',()=>{
    cy.get('#mini-avatar').click()
})
Cypress.Commands.add('ClickYourProfileButton',()=>{
    cy.get('#headlessui-menu-item-3 > .block').should('be.visible').click()

})
Cypress.Commands.add('AssertUserPictureContainer',()=>{
    cy.get('#avatar').should('be.visible')
    //assert the status row
    cy.get('.lg\:max-w-lg > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flex > div > :nth-child(1)').should('be.visible')
    //assert the joined date row
    cy.get(':nth-child(2) > .flex > div > :nth-child(2)').should('be.visible')
    //assert preview photo button
    cy.get('.bg-blue-500').should('have.text','Preview Photo')
    //assert official documents text
    cy.get('.px-4.my-4 > h2.font-medium').should('have.text','Official Documents')
    cy.get('.px-4.my-4 > .w-full > :nth-child(1) > .font-medium').should('have.text','Citizenship')
    cy.get('.w-full > :nth-child(2) > .font-medium').should('have.text','PAN Card')


})
Cypress.Commands.add('BasicInformationContainer',()=>{
    var random_date=generateRandomDate(1998,1999)
    console.log(random_date)
    cy.get('#headlessui-disclosure-button-12').should('be.visible').click()
    //assert the first name
    cy.get(':nth-child(1) > .pb-1').should('have.text','First Name*')
    cy.get('#first_name').should('be.visible').clear().type('Subas')
    //assert the middle name
    cy.get(':nth-child(2) > .pb-1').should('have.text','Middle Name')
    cy.get('#middle_name').should('be.visible')
    cy.get(':nth-child(3) > .pb-1').should('have.text','Last Name*')
    cy.get('#last_name').should('be.visible').clear().type('Poudel')
    //select the gender
    cy.get(':nth-child(4) > .pb-1').should('have.text','Gender*')
    cy.get('#gender').should('be.visible').select('Male')
    //select the married toggle button
    cy.get(':nth-child(5) > .block').should('have.text','Married')
    cy.get('#headlessui-switch-18').should('be.visible').click()
    //asssert the pan number field
    cy.get(':nth-child(6) > .pb-1').should('have.text','PAN Number')
    cy.get('#pan_number').should('be.visible').clear().type('987654321')
    //assert the citizenship number
    cy.get(':nth-child(7) > .pb-1').should('have.text','Citizenship Number*')
    cy.get('#citizenship_id').should('be.visible').clear().type('7654892309755')
    //assert the birth date
    cy.get(':nth-child(8) > .pb-1').should('have.text','Birth Date*')
    cy.get('#date_of_birth').type(random_date)
    cy.get(':nth-child(9) > .pb-1').should('have.text','Postal Code*')
    cy.get('#postal_code').should('be.visible').clear().type('44600')
    //assert the mobile number
    cy.get(':nth-child(11) > .pb-1').should('have.text','Mobile Number*')
    cy.get('#mobile_phone_number_1').should('be.visible').clear().type('9862175008')
    //assert the emergency number
    cy.get(':nth-child(12) > .pb-1').should('have.text','Emergency Number*')
    cy.get('#mobile_phone_number_2').should('be.visible').clear().type('9862175009')
    //assert the landline number
    cy.get(':nth-child(13) > .pb-1').should('have.text','Landline Number')
    cy.get('#landline_phone_number').should('be.visible')
})
Cypress.Commands.add('AssertBankInformation',()=>{
    cy.get('#headlessui-disclosure-button-14').should('be.visible').click()
    //assert the account name
    cy.get('#headlessui-disclosure-panel-15 > .grid > :nth-child(2) > .pb-1').should('have.text','Account Name*')
    cy.get('#account_name').should('be.visible').clear().type('Subas Poudel')
    //assert the account number
    cy.get('#headlessui-disclosure-panel-15 > .grid > :nth-child(3) > .pb-1').should('have.text','Account Number*')
    cy.get('#account_number').should('be.visible').clear().type('0065782345F')
    //assert the bank name
    cy.get('#headlessui-disclosure-panel-15 > .grid > :nth-child(4) > .pb-1').should('have.text','Bank Name*')
    cy.get('#bank_name').should('be.visible').clear().type('Nabil Bank')
    //assert the branch name
    cy.get('#headlessui-disclosure-panel-15 > .grid > :nth-child(5) > .pb-1').should('have.text','Branch Name*')
    cy.get('#branch').should('be.visible').clear().type('Durbar Marg')
})
Cypress.Commands.add('AssertCompanyInformationContainer',()=>{
    let random_date=generateRandomDate(2021,2022)
    cy.get('#headlessui-disclosure-button-16').should('be.visible').click()
    cy.get('#headlessui-disclosure-panel-17 > .grid > :nth-child(1) > .pb-1').should('have.text','Start Date*')
    cy.get('#start_date').should('be.visible').type(random_date)
    cy.get('#headlessui-disclosure-panel-17 > .grid > :nth-child(3) > .pb-1').should('have.text','Status*')
    cy.get('#status').should('be.visible')
    cy.get('#headlessui-disclosure-panel-17 > .grid > :nth-child(2) > .pb-1').should('have.text','Company Email*')
    cy.get('#linkedin_profile_url').should('be.visible').clear().type('https://www.linkedin.com/in/subas-poudel/')
    
    cy.get('#upwork_profile').should('be.visible').clear().type('https://www.upwork.com/freelancers/~01617aacf1ca07')
    cy.get('#headlessui-disclosure-panel-17 > .grid > :nth-child(7) > .pb-1').should('have.text','Designation*')
    cy.get('#designation').should('be.visible').select('Senior Backend Developer')

})
Cypress.Commands.add('ClickSaveButton',()=>{
    cy.get('.py-3 > .inline-flex').contains('Save').click({force:true})
    cy.get('.ml-3 > .text-sm').should('have.text','Successfully updated user profile.')

})

