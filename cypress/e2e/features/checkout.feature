Feature: Checkout function
    As a user, I want to check out items in the cart

    Background: 
        Given User is on login page
        And User logins with username as 'standard_user' and password as 'secret_sauce'

    Scenario: Verify that the checkout one item is successfully completed
        When User add items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        And User go to cart and checkout
        | first_name   | last_name  | zip_code  |
        | Dung         | Pham       | 70000     |
        And User continue checkout
        Then '1' item in the cart should be shown in checkout step two
        When User finish the checkout
        Then 'THANK YOU FOR YOUR ORDER' message should be shown when the checkout is completed

    Scenario: Verify that the checkout many items is successfully completed
        When User add items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        | Sauce Labs Bike Light     |
        And User go to cart and checkout
        | first_name   | last_name  | zip_code  |
        | Dung         | Pham       | 70000     |
        And User continue checkout
        Then '2' item in the cart should be shown in checkout step two
        When User finish the checkout
        Then 'THANK YOU FOR YOUR ORDER' message should be shown when the checkout is completed
        

    Scenario: Verify that the checkout is unsuccessfully when missing checkout information
        When User add items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        And User go to cart and checkout
        And User continue checkout
        Then 'Error: First Name is required' error message should be shown
        And User input checkout information 'Dung' as 'First Name'
        And User continue checkout
        Then 'Error: Last Name is required' error message should be shown
        When User input checkout information 'Pham' as 'Last Name'
        And User continue checkout
        Then 'Error: Postal Code is required' error message should be shown

    Scenario: Verify that the checkout is unsuccessfully when user cancel checkout on "checkout step one" page
        When User add items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        And User go to cart and checkout
        And User cancel the checkout
        Then 'cart.html' page is displayed

    Scenario: Verify that the checkout is unsuccessfully when user cancel checkout on "checkout step two" page
        When User add items to the cart
        | items                     |
        | Sauce Labs Backpack       |
        And User go to cart and checkout
        | first_name   | last_name  | zip_code  |
        | Dung         | Pham       | 70000     |
        And User cancel the checkout
        Then 'cart.html' page is displayed