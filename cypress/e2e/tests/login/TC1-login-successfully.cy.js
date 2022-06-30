/// <reference types="Cypress" />

const validUserList = require('../../../fixtures/users/valid-users.json');
const { LoginSteps } = require('../../common-steps/login-steps');
const { InventoryPage } = require('../../pages/inventory-page');

describe("Login", function () {

  const loginSteps = new LoginSteps
  const inventoryPage = new InventoryPage

  it("Verfy that user can login page successfully with valid username and password", function () {
    validUserList.forEach(user => {
      let username = user.username;
      let password = user.password;

      loginSteps.loginWithCredentials(username, password)

      //Get url of page and assert
      cy.url().should('include', 'inventory.html');
      //Get list of children and assert its length
      inventoryPage.getInventoryList().children().should('have.length', 6);
    });
  })
});