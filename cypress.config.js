const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: '**/*.feature'
  },
  env: {
    baseUrl: 'https://www.saucedemo.com/'
  }
});
