Feature: Checkout function
    As a user, I want to add and remove items in the cart

    Background: 
        Given User is on login page
        And User enters username as 'standard_user' and password as 'secret_sauce'
        And User clicks on login button

    Scenario: Verify if user can add and remove a item in the cart
        Then '6' products should have an Add To Cart button
        When User add a 'Sauce Labs Backpack' item to the cart
        Then Shopping cart badge should update the cart count to '1'
        And '5' products should have an Add To Cart button
        And '1' products should have an Remove from cart button
        When User remove 'Sauce Labs Backpack' item from the cart
        Then Shopping cart badge should not be displayed

    Scenario: Verify if user can add two items to the cart and then remove one
        When User add a 'Sauce Labs Backpack' item to the cart
        When User add a 'Sauce Labs Bike Light' item to the cart
        Then Shopping cart badge should update the cart count to '2'
        When User remove 'Sauce Labs Backpack' item from the cart
        Then Shopping cart badge should update the cart count to '1'
        And '5' products should have an Add To Cart button
        And '1' products should have an Remove from cart button
        When User open Cart page
        Then Remaining item 'Sauce Labs Bike Light' in the cart is correctly displayed on cart page