import Header from './Header';

describe('Header', () => {
  it('should display a title', () => {
    cy.mount(<Header />);
    cy.findByRole('heading', { name: 'Cypress Component Testing' }).should('exist');
  });
});
