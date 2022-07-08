// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Import Testing Library
import '@testing-library/cypress/add-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      visitStory: typeof cy.visit;
    }
  }
}

// cy.visitStory
Cypress.Commands.add('visitStory', (story) => {
  // Visit iframe.html to render the component in isolation
  return cy.visit(`http://localhost:6006/iframe.html?id=${story}&viewMode=story`);
});
