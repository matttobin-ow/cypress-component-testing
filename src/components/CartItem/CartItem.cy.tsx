import CartItem from './CartItem';

describe('CartItem', () => {
  beforeEach(() => {
    const onRemoveSpy = cy.spy().as('onRemoveSpy');
    cy.mount(<CartItem itemId={1} itemName="Chocolate Bar" quantity={2} onRemove={onRemoveSpy} />);
  });

  // Test component UI
  it('displays item name and quantity from props', () => {
    cy.findByTestId('item-name').should('contain.text', 'Chocolate Bar');
    cy.findByTestId('quantity').should('contain.text', '2');
  });

  // Test component API
  it('should fire an event when an item is remove from the cart', () => {
    cy.findByRole('button', { name: 'Remove' })
      .click()
      .then(() => {
        cy.get('@onRemoveSpy').should('have.been.calledWith', 1);
      });
  });
});
