# Cypress Component Testing

## What?

Cypress 10 provides Component Testing (currently in beta) in addition to it's regular E2E testing framework.

Components can now be built and tested in isolation, separate from the pages they will finally be rendered in.

React and Vue (includig Next and Nuxt) are currently supported.

## Why?

Cypress component testing can be a powerful tool for Test Driven Development when building component libraries. Components can be built and tested in isolation without the need to mount them in an app in order to see their UI.

It also offers the ability to build a similar suite of tests to other unit test frameworks for components. Only one framework is needed to perform component, integration and E2E tests.

## How?

Cypress component tests use the same API as it's E2E testing, leading to easy to understand, framework agnostic tests.

Component tests currently have support for multiple browsers out of the box: Chrome, Edge, Firefox and Electron.

Like E2E testing, component tests also support Testing Library.

These tests can be run in both a GUI from the command line so they can be run during CI/CD.

Gives you the ability to test for different audiences:

- Developer: test component APIs (props and events).
- End users: test interactions and UI.

## How does it compare to other solutions for building and testing component libraries?

### Storybook + Cypress E2E tests

Storybook and Cypress E2E tests mainly focus on visual and interaction testing. The main advantage of Cypress Component Testing is that it also gives you the ability to test component APIs (props and events) within the same test suite as visual and interaction tests. This could be achieved with E2E of the Storybook UI and updating controls / checking for actions but this would require much more overhead.

Storybook + Cypress E2E tests would also require the Storybook server to be running or deployed in order to test. Cypress component tests can be run without other dependencies as it uses it's own dev server.

Storybook does give users some more freedom to see how components can behave with different data on the fly with it's controls panel. Cypress component tests would require a separate test to be written for each different option.

### Storybook Interaction Testing

Storybook supports Interaction Testing, a solution for testing components within the Storybook environment without an additional testing framework. These tests can be written as part of stories. Testing Library is also supported to provide a familiar API to other frameworks thhat also support Testing Library.

UI, interactions and APIs can be tested. Tests can included components mounted with test specific props, each isolated to it's own story.

Similarly to Cypress Component Testing, these tests can be run in isolation without another dependency both from Storybook web interface or via the CLI.

### Jest for component TDD

Cypress allows you to see the components in the GUI test runner, meaning there's no need to mount components in an app or 'kitchen sink' page in order to see them while developing as you would normally need when using Jest for TDD.

If you're also performing integration or E2E testing with Cypress, then only one tool is needed, no need to configure two separate tools.

## Caveats

### Tailwind

When building components while using the Cypress test runner, the CSS file included in the tests would fail to update with new Tailwind classes even if the Vite dev server is running. Cypress would need to be restarted in order to see any changes. Root of this issue is currently unknown. A work around has been implemented with concurrent Cypress and Tailwind tasks to build the CSS to a dedicated test CSS file. See L12 in [cypress/support/component.tsx](../cypress/support/component.tsx).
