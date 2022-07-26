import { LoginPage } from "../../pages/login-page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { CartPage } from "../../pages/cart-page";


const loginPage = new LoginPage()
const cartPage = new CartPage

Given('User is on login page', () => {
    cy.visit(Cypress.env('baseUrl'));
})

When('User logins with username as {string} and password as {string}', (username, password) => {
    loginPage.login(username, password);
})

Then('{string} page is displayed', (page_url) => {
    cy.url().should('include', page_url);
})