import { generateRandomDate1998 } from "../random_birthdate"
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
    let random_date=generateRandomDate1998()
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
    


})