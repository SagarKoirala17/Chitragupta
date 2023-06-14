Cypress.Commands.add('ClickUserButton',()=>{
    cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(4) > li > div > div > button > span.ml-4.font-medium").should('be.visible').click()
})
Cypress.Commands.add('AssertUserTable',()=>{
    
})
