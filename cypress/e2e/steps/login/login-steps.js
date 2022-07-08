import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { InventoryPage } from "../../pages/inventory-page";
import { LoginPage } from "../../pages/login-page";


const loginPage = new LoginPage
const inventoryPage = new InventoryPage

Then('User is able to successfully login to the website', () => {
    //Get url of page and assert
    cy.url().should('include', 'inventory.html');
    //Get list of children and assert its length
    inventoryPage.getInventoryList().children().should('have.length', 6);
})

Then('User is not able to login to the website', () => {
    cy.url().should('equal', Cypress.env('baseUrl'));
});

And('The error message {string} is displayed', (errorMesssage) => {
    loginPage.getErrorMessage().should('contain', errorMesssage);
});
