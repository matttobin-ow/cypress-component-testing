describe('CartItem', () => {
  beforeEach(() => {
    cy.visitStory('component-testing-cart-item--default');
  });

  it('displays item name and quantity', () => {
    cy.findByTestId('item-name').should('contain.text', 'Chocolate Bar');
    cy.findByTestId('quantity').should('contain.text', '2');
  });

  it('displays a remove button', () => {
    cy.findByRole('button', { name: 'Remove' }).should('exist');
  });
});
