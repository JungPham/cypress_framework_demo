import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { CartPage } from "../../pages/cart-page";
import { CheckoutCompletePage } from "../../pages/checkout-complete";
import { CheckoutStepOnePage } from "../../pages/checkout-step-one-page";
import { CheckoutStepTwoPage } from "../../pages/checkout-step-two-page";

const cartPage = new CartPage
const checkoutStepOnePage = new CheckoutStepOnePage
const checkoutStepTwoPage = new CheckoutStepTwoPage
const checkoutCompletePage = new CheckoutCompletePage

When('User cancel the checkout', () => {
    cartPage.clickOnCancelButton()
});

When('User input checkout information {string} as {string}', (value, field_name) => {
    checkoutStepOnePage.inputCheckoutInfo(value, field_name)
});

When('User open cart page', () => {
    cartPage.open()
})

When('User go to cart and checkout', (dataTable:any) => {
    cartPage.open()
    cartPage.clickOnCheckoutButton()
    if (dataTable != null){
        dataTable.hashes().forEach((element) => {
        checkoutStepOnePage.inputCheckoutInfo(element.first_name, "First Name");
        checkoutStepOnePage.inputCheckoutInfo(element.last_name, "Last Name");
        checkoutStepOnePage.inputCheckoutInfo(element.zip_code, "Zip Code");
        
    })}
});

When('User continue checkout', () => {
    checkoutStepOnePage.clickOnContinueButton()
});

When('User finish the checkout', () => {
    checkoutStepTwoPage.clickOnFinishButton()
});

Then('{string} item in the cart should be shown in checkout step two', (number_item) => {
    checkoutStepTwoPage.items().should('have.length', number_item)
})

Then('{string} message should be shown when the checkout is completed', (message) => {
    checkoutCompletePage.message().should('contain', message)
})

Then('{string} error message should be shown', (error_message) => {
    checkoutStepOnePage.error().should('contain', error_message)
})