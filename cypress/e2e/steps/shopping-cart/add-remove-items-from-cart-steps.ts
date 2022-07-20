import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { CartPage } from "../../pages/cart-page";
import { InventoryPage } from "../../pages/inventory-page";

const inventoryPage = new InventoryPage
const cartPage = new CartPage

Then('{string} products should have an Add To Cart button', (number) => {
    inventoryPage.addToCartButtons().should('have.length', number)
})

When('User add a {string} item to the cart', (item_name) => {
    inventoryPage.addItemToCart(item_name)
})

Then('Shopping cart badge should update the cart count to {string}', (number) => {
    inventoryPage.shoppingCartBadge().should('contain.text', number)
})

Then('Shopping cart badge should not be displayed', () => {
    inventoryPage.shoppingCartBadge().should('not.exist')
})

Then('{string} products should have an Remove from cart button', (number) => {
    inventoryPage.removeFromCartButtons().should('have.length', number)
})

When('User remove {string} item from the cart', (item_name) => {
    inventoryPage.removeItemFromCart(item_name)
})

When('User open Cart page', () => {
    cartPage.open()
})

Then('Remaining item {string} in the cart is correctly displayed on cart page', (item_name) => {
    cartPage.items()
            .should('have.length', 1)
            .eq(0)
            .should('contain.text', item_name)
})
