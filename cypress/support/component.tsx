// Component testing setup
// Includes code that runs before component tests
// Add custom commands, import global stylesheets etc.

// Import commands.js using ES2015 syntax:
import './commands';

// Import Testing Library
import '@testing-library/cypress/add-commands';

// Import stylesheet
import '../../src/index.css';

import { mount } from 'cypress/react';
import { RecoilRoot } from 'recoil';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      mountWithRecoil: typeof mount;
    }
  }
}

// cy.mount
Cypress.Commands.add('mount', mount);

// cy.mountWithRecoil
Cypress.Commands.add('mountWithRecoil', (component, options = {}) => {
  const wrapped = <RecoilRoot>{component}</RecoilRoot>;
  return mount(wrapped, options);
});
