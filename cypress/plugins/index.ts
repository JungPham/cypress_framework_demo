const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = (on, config) => {
    const options = browserify.defaultOptions;
    options.browserifyOptions.plugin.unshift(['tsify']);

    on('file:preprocessor', cucumber(options));
    allureWriter(on, config);
    return config;
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}

// For Cucumber Integration
const createEsbuildPlugin =
    require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
    require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
    require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
module.exports = async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
    // To use esBuild for the bundler when preprocessing
    on(
        'file:preprocessor',
        createBundler({
            plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
    )
    return config
}
