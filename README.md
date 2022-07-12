# Cypress Component Testing Demo

This demo includes a small React component library built and tested with Cypress component testing.

As a comparison, Storybook with Cypress E2E testing and Interaction Testing has also been included.

More information on Cypress Component Testing can be found [here](./docs/component-testing.md).

## Running Cypress Component Tests

1. Clone the repo
2. Run `npm install`
3. Open the Cypress GUI with `npm run cy:open`
4. Select Component Testing to view component tests

**Tests can also be run via the CLI with:** `npm run cy:comp`

## Running Storybook + E2E tests

1. Run the Storybook server with `npm run storybook`
2. Open the Cypress GUI with `npm run cy:open`
3. Select E2E Testing to view E2E tests

**Tests can also be run via the CLI with:** `npm run cy:e2e`

## Running Storybook Interaction Tests

1. Run the Storybook server with `npm run storybook`
2. Navigate to [http://localhost:6006](http://localhost:6006)
3. Select a story and view the test results under the **Interactions** tab

**Tests can also be run via the CLI with:** `npm run test-storybook`

### Other scripts

- `npm run dev` - Run the Vite dev server at [http://localhost:3000](http://localhost:3000)
- `npm run build` - Build the application with Vite
- `npm run tw:watch` - Watch and build Tailwind styles - See the [Tailwind caveat](./docs/component-testing.md#tailwind) for details.
