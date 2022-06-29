/// <reference types="Cypress" />

const validUserList = require('../../../fixtures/users/invalid-users.json');
const { LoginSteps } = require('../../common-steps/login-steps');
const { LoginPage } = require('../../pages/login-page');

describe("Login", function () {

    const loginSteps = new LoginSteps
    const loginPage = new LoginPage

    it("Verfy that user can login page unsuccessfully with invalid users", function () {
        validUserList.forEach(user => {
            let username = user.username;
            let password = user.password;

            loginSteps.loginWithCredentials(username, password)

            //Get url of page and assert
            cy.url().should('equal', Cypress.env('baseUrl'));
            //Get error message and assert
            loginPage.getErrorMessage().should('contain', 'Username and password do not match any user');
        });
    })
});