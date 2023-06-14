import 'cypress-file-upload';
Cypress.Commands.add('AttachProfilePhoto',()=>{
    let profile_photo='profile.png'
    cy.get('#avatar').should('be.visible').attachFile(profile_photo)
})