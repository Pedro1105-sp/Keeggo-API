const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({defaultCommandTimeout: 8000, pageLoadTimeout:10000,
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/steps/*.feature",
  }
});
