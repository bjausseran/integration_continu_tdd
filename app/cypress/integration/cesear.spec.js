
describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('../../index.html')
    })

    it("empty => empty", ()=> {
        cy.get('[data-cy=cypher-key]')
        .clear()
        .type(1);
        
        cy.get('[data-cy=cypher-text]')
        .clear();
        
        cy.get('[data-cy=cypher-btn]')
        .click();

        cy.get('[data-cy=cypher-result]')
        .should('have.text',"");
    });

    it("caca => gege", ()=> {
      cy.get('[data-cy=cypher-key]')
      .clear()
      .type(4);
      
      cy.get('[data-cy=cypher-text]')
      .clear()
      .type('caca');
      
      cy.get('[data-cy=cypher-btn]')
      .click();

      cy.get('[data-cy=cypher-result]')
      .should('have.text',"gege");
  })

});