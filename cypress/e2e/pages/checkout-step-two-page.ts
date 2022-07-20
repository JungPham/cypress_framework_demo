export class CheckoutStepTwoPage {
    items() { 
        return cy.get('.inventory_item_name') 
    }

    clickOnFinishButton() {
        return cy.contains("Finish").click()
    }
}
