export class InventoryPage {
    getInventoryList() {
        return cy.get('div.inventory_list')
    }

    addToCartButtons() {
        return cy.get('[data-test^=add-to-cart]') 
    }

    addItemToCart(productName) {
        cy.contains('.inventory_item',productName).contains('Add to cart').click()
    }

    removeItemFromCart(productName) {
        cy.contains('.inventory_item',productName).contains('Remove').click()
    }

    removeFromCartButtons() {
        return cy.get('[data-test^=remove]') 
    }

    shoppingCartBadge() {
        return cy.get('.shopping_cart_badge') 
    }
}