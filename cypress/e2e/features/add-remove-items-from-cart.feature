Feature: Add remove items function
    As a user, I want to add and remove items in the cart

    Background: 
        Given User is on login page
        And User logins with username as 'standard_user' and password as 'secret_sauce'

    Scenario: Verify if user can add and remove a item in the cart
        Then '6' products should have an Add To Cart button
         When User add items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        Then Shopping cart badge should update the cart count to '1'
        And '5' products should have an Add To Cart button
        And '1' products should have an Remove from cart button
        When User remove items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        Then Shopping cart badge should not be displayed

    Scenario: Verify if user can add two items to the cart and then remove one
        When User add items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        | Sauce Labs Bike Light     |
        Then Shopping cart badge should update the cart count to '2'
        When User remove items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        Then Shopping cart badge should update the cart count to '1'
        And '5' products should have an Add To Cart button
        And '1' products should have an Remove from cart button
        When User open cart page
        Then Remaining item 'Sauce Labs Bike Light' in the cart is correctly displayed on cart page