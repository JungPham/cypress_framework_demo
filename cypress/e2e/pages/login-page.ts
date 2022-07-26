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

    login(username, password) {
        if (username != null){
            this.getUsernameTextBox().type(username);
        }
        if (password != null){
        this.getPasswordTextBox().type(password);
        }
        this.getLoginButton().click();
    }
}