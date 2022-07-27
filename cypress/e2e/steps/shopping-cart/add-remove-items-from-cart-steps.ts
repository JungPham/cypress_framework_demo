import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { CartPage } from "../../pages/cart-page";
import { InventoryPage } from "../../pages/inventory-page";

const inventoryPage = new InventoryPage
const cartPage = new CartPage

When('User add items to the cart', (dataTable:any) => {
    dataTable.hashes().forEach((element) => {
        inventoryPage.addItemToCart(element.items)
    })
});

When('User remove items to the cart', (dataTable:any) => {
    dataTable.hashes().forEach((element) => {
        inventoryPage.removeItemFromCart(element.items)
    })
});

Then('Shopping cart badge should not be displayed', () => {
    inventoryPage.shoppingCartBadge().should('not.exist')
})

Then('{string} products should have an Remove from cart button', (number) => {
    inventoryPage.removeFromCartButtons().should('have.length', number)
})

Then('Shopping cart badge should update the cart count to {string}', (number) => {
    inventoryPage.shoppingCartBadge().should('contain.text', number)
})

Then('{string} products should have an Add To Cart button', (number) => {
    inventoryPage.addToCartButtons().should('have.length', number)
})

Then('Remaining item {string} in the cart is correctly displayed on cart page', (item_name) => {
    cartPage.items()
            .should('have.length', 1)
            .eq(0)
            .should('contain.text', item_name)
})