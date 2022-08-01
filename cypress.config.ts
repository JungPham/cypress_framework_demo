const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nsiagy',
  chromeWebSecurity: false,
  videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.ts')(on, config)
    },
    specPattern: '**/*.feature',
    numTestsKeptInMemory: 5
  },
  env: {
    baseUrl: 'https://www.saucedemo.com/'
  }
});
