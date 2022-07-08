describe('Header', () => {
  beforeEach(() => {
    cy.visitStorybook('component-testing-header--default');
  });

  it('should display the header', () => {
    cy.findByRole('heading', { name: 'Cypress Component Testing' }).should('exist');
  });
});
