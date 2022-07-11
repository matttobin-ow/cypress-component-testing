# Cypress Component Testing Demo

This demo includes a small component library built and tested with Cypress component testing.

As a comparison, Storybook withh Cypress E2E testing has also been included.

More information on Cypress component testing can be found [here](./docs/component-testing.md).

## Running Cypress component tests

1. Clone the repo
2. Run `npm install`
3. Open the Cypress GUI with `npm run cy:open`
4. Select Component Testing to view component tests

## Running Storybook + E2E tests

1. Run the Storybook server with `npm run storybook`
2. Open the Cypress GUI with `npm run cy:open`
3. Select E2E Testing to view E2E tests

### Other scripts

- `npm run dev` - Run the Vite dev server at [http://localhost:3000](http://localhost:3000)
- `npm run cy:comp` - Run Cypress component tests via the CLI
- `npm run cy:e2e` - Run Cypress E2E tests via the CLI
