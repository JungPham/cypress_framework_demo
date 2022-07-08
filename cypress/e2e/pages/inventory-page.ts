export class InventoryPage {
    getInventoryList() {
        return cy.get('div.inventory_list')
    }
}