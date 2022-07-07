import { mount } from 'cypress/react';
import Header from './Header';

describe('Header', () => {
  it('should display a title', () => {
    mount(<Header />);
    cy.findByRole('heading', { name: 'Cypress Component Testing' }).should('exist');
  });
});
