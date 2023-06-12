Cypress.Commands.add('ClickUsername',()=>{
    cy.get('#mini-avatar').click()
})
Cypress.Commands.add('ClickYourProfileButton',()=>{
    cy.get('#headlessui-menu-item-3 > .block').should('be.visible').click()

})
Cypress.Commands.add('AssertUserPictureContainer',()=>{
    cy.get('#avatar').should('be.visible')
    //assert the status bar
    cy.get('.lg\:max-w-lg > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flex > div > :nth-child(1)').should('be.visible')



})