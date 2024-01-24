describe('Add Book', () => {

  const bookTitle = 'Test book';

  beforeEach(() => {
    cy.visit('http://localhost:4200/books/panel');
    cy.get('.card-title').should('have.length', 2);
    //cy.url().should('include', 'books/panel');
    cy.get('.nav-link').contains('Add').click();
    cy.get('.book-form');
  })

  it('should add new book', () => {
    cy.get('[name="title"]').clear().type(bookTitle);
    cy.get('[name="authors"]').clear().type('Marek Nowak');
    cy.get('[name="category"]').invoke('val', '#777777').trigger('change');
    cy.get('[name="genre"]').select('Action');
    cy.get('[name="rating"]').eq(4).check();
    cy.get('[name="isBestseller"]').check();
    //cy.get('.btn-success').should('not.be.disabled');
    //cy.intercept({method: 'GET', url: 'http://localhost:3000/books'}).as('refreshBooks');
    //cy.wait('@refreshBooks').its('response.statusCode').should('equal', 200);
    cy.get('.btn-success').click();
    cy.get('.book-form').should('not.exist');
    cy.get('.card-title').contains(bookTitle);
  });

});
