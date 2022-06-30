import { LoginPage } from "../pages/login-page";

export class LoginSteps {
    loginWithCredentials(username, password) {
        const loginPage = new LoginPage()

        cy.visit(Cypress.env('baseUrl'));
        loginPage.getUsernameTextBox().type(username);
        loginPage.getPasswordTextBox().type(password);
        loginPage.getLoginButton().click();
    }
}