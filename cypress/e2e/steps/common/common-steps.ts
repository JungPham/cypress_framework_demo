import { LoginPage } from "../../pages/login-page";
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { CartPage } from "../../pages/cart-page";


const loginPage = new LoginPage()
const cartPage = new CartPage

Given('User is on login page', () => {
    cy.visit(Cypress.env('baseUrl'));
})

When('User enters username as {string} and password as {string}', (username, password) => {
    loginPage.getUsernameTextBox().type(username);
    loginPage.getPasswordTextBox().type(password);
})

And('User clicks on login button', () => {
    loginPage.getLoginButton().click();
})

Then('{string} page is displayed', (page_url) => {
    cy.url().should('include', page_url);
})