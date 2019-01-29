/// <reference types="Cypress" />

context('Menu', () => {
  beforeEach(() => {
    cy.login('fieldWorker')
  })

  it('Opens menu and selects Bengali', () => {
    cy.get('#sub-menu', { timeout: 60000 }).click()
    //Click on change Language
    cy.get('#ChangeLanguage-nested-menu').click()
    // select Bengali
    cy.get('#Bengali-nested-menu-item')
      .contains('Bengali')
      .click()

    cy.get('#new_event_declaration').should('be.visible')
  })
})
