Cypress.Commands.add('ClickUserButton',()=>{
    cy.get("#headlessui-dialog-panel-3 > nav > div > ol:nth-child(4) > li > div > div > button > span.ml-4.font-medium").should('be.visible').click()
})
Cypress.Commands.add('AssertUserTable',()=>{
    let user_header=['First Name','Last Name','status','email','Join Date','Leave Requests']
    for(let i=0;i<user_header.length;i++){
    cy.get(`#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.mx-3.overflow-hidden.bg-white.rounded.shadow-sm > div.relative.flex.flex-col.overflow-auto.bg-white.border-b.rounded-t.datatable-container > table > thead > tr:nth-child(1) > th:nth-child(${i+1}) > div`).should('have.text',user_header[i])
    if(i<=4)
    cy.get(`#__next > div > div.flex.flex-col.flex-1.lg\\:pl-64 > main > div.mx-3.overflow-hidden.bg-white.rounded.shadow-sm > div.relative.flex.flex-col.overflow-auto.bg-white.border-b.rounded-t.datatable-container > table > thead > tr:nth-child(1) > th:nth-child(${i+1}) > div > span > svg`).should('be.visible')
    }
    
    cy.get('#first_name').should('be.visible')
    cy.get('#last_name').should('be.visible')
    cy.get('#email').should('be.visible')
    cy.get('#status').should('be.visible')

})
Cypress.Commands.add('AssertUserComponents',()=>{
    cy.get('.text-gray-800').should('have.text','User List')
    cy.get('.hidden > .inline-flex').should('have.text','Invite User')
    cy.get('.space-x-4 > [type="button"]').should('have.text','Bulk Upload')
    cy.AssertUserTable()
})
