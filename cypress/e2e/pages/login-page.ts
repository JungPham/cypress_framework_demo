export class LoginPage {
    getUsernameTextBox() {
        return cy.get('#user-name')
    }

    getPasswordTextBox() {
        return cy.get('#password')
    }

    getLoginButton() {
        return cy.get('#login-button')
    }

    getErrorMessage() {
        return cy.get('[data-test=error]')
    }
}