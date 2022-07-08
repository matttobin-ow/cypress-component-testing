describe('Counter', () => {
  beforeEach(() => {
    cy.visitStory('component-testing-counter--default');
  });

  it('should default to 0', () => {
    cy.findByTestId('counter').should('contain.text', '0');
  });

  it('should increment the count', () => {
    cy.findByRole('button', { name: '+' }).click();
    cy.findByTestId('counter').should('contain.text', '1');
  });

  it('should decrement the count', () => {
    cy.findByRole('button', { name: '-' }).click();
    cy.findByTestId('counter').should('contain.text', '-1');
  });
});
