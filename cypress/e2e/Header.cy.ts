describe('Header', () => {
  beforeEach(() => {
    cy.visitStory('component-testing-header--default');
  });

  it('should display a title', () => {
    cy.findByRole('heading', { name: 'Cypress Component Testing' }).should('exist');
  });
});
