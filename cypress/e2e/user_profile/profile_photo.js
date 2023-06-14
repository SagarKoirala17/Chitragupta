import 'cypress-file-upload';
Cypress.Commands.add('AttachProfilePhoto',()=>{
    let profile_photo='subas_sir.png'
    cy.get('#avatar').should('be.visible').attachFile(profile_photo)
})