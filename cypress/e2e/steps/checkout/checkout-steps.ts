import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { first } from "cypress/types/lodash";
import { CartPage } from "../../pages/cart-page";
import { CheckoutCompletePage } from "../../pages/checkout-complete";
import { CheckoutStepOne, CheckoutStepOnePage } from "../../pages/checkout-step-one-page";
import { CheckoutStepTwoPage } from "../../pages/checkout-step-two-page";

const cartPage = new CartPage
const checkoutStepOnePage = new CheckoutStepOnePage
const checkoutStepTwoPage = new CheckoutStepTwoPage
const checkoutCompletePage = new CheckoutCompletePage

When('User click on Checkout button', () => {
    cartPage.clickOnCheckoutButton()
});

When('User click on Cancel button', () => {
    cartPage.clickOnCancelButton()
});

When('User input checkout information {string} as {string}', (value, field_name) => {
    checkoutStepOnePage.inputCheckoutInfo(value, field_name)
});

When('User click on Continue button', () => {
    checkoutStepOnePage.clickOnContinueButton()
});

Then('{string} item in the cart should be shown in checkout step two', (number_item) => {
    checkoutStepTwoPage.items().should('have.length', number_item)
})

When('User click on Finish button', () => {
    checkoutStepTwoPage.clickOnFinishButton()
});

Then('{string} message should be shown when the checkout is completed', (message) => {
    checkoutCompletePage.message().should('contain', message)
})

Then('{string} error message should be shown', (error_message) => {
    checkoutStepOnePage.error().should('contain', error_message)
})