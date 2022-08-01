const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nsiagy',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.ts')(on, config)
    },
    specPattern: '**/*.feature'
  },
  env: {
    baseUrl: 'https://www.saucedemo.com/'
  }
});
