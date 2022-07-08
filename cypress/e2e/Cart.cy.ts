describe('Cart', () => {
  beforeEach(() => {
    cy.visitStory('component-testing-cart--default');
  });

  it('should display 3 items in the cart', () => {
    cy.findAllByTestId('cart-item').should('have.length', 3);
  });

  it('should remove an item from the cart and display 2 items in the cart', () => {
    cy.findAllByTestId('cart-item')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: 'Remove' }).click();
      })
      .then(() => {
        cy.findByText('Sandwich').should('not.exist');
        cy.findAllByTestId('cart-item').should('have.length', 2);
      });
  });
});
