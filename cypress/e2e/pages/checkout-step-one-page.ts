export class CheckoutStepOnePage {
    inputCheckoutInfo(value, field_name) {
        if (field_name == 'First Name') {
            cy.get('#first-name').type(value)
        }
        if (field_name == 'Last Name') {
            cy.get('#last-name').type(value)
        }
        if (field_name == 'Zip Code') {
            cy.get('#postal-code').type(value)
        }
    }

    clickOnContinueButton() {
        cy.get("#continue").click()
    }

    error() {
        return cy.get(".error")
    }
}
