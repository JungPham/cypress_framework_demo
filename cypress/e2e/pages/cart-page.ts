export class CartPage {
    open() {
        return cy.get('.shopping_cart_badge').click() 
    }

    items() {
        return cy.get('.inventory_item_name')
    }

    clickOnCheckoutButton() {
        return cy.get('#checkout').click()
    }

    clickOnCancelButton() {
        return cy.get('#cancel').click()
    }
}