import { InventoryPage } from "../../pages/inventory-page";
import { LoginPage } from "../../pages/login-page";
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"


const loginPage = new LoginPage()
const inventoryPage = new InventoryPage

Given('User is on login page', () => {
    cy.visit(Cypress.env('baseUrl'));
});

When('User enters username as {string} and password as {string}', (username, password) => {
    loginPage.getUsernameTextBox().type(username);
    loginPage.getPasswordTextBox().type(password);
})

And('User clicks on login button', () => {
    loginPage.getLoginButton().click();
})