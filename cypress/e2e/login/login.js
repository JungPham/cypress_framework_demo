import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

import { LoginPage } from "../pages/login-page";

Given("I am on login page", () => {
    cy.visit(Cypress.env('baseUrl'));
});

// export class LoginSteps {
//     loginWithCredentials(username, password) {
//         const loginPage = new LoginPage()

//         cy.visit(Cypress.env('baseUrl'));
//         loginPage.getUsernameTextBox().type(username);
//         loginPage.getPasswordTextBox().type(password);
//         loginPage.getLoginButton().click();
//     }
// }