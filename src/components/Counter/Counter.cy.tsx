import Counter from './Counter';

describe('Counter', () => {
  it('mounts', () => {
    cy.mount(<Counter />);
  });

  it('should default to 0', () => {
    cy.mount(<Counter />);
    cy.findByTestId('value').should('contain.text', '0');
  });

  it('should set a default value via a prop', () => {
    cy.mount(<Counter initialValue={200} />);
    cy.findByTestId('value').should('contain.text', '200');
  });

  it('should increment the count', () => {
    cy.mount(<Counter />);
    cy.findByRole('button', { name: '+' }).click();
    cy.findByTestId('value').should('contain.text', '1');
  });

  it('should decrement the count', () => {
    cy.mount(<Counter />);
    cy.findByRole('button', { name: '-' }).click();
    cy.findByTestId('value').should('contain.text', '-1');
  });
});
