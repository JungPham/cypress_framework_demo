Feature: Checkout function
    As a user, I want to check out items in the cart

    Background: 
        Given User is on login page
        And User enters username as 'standard_user' and password as 'secret_sauce'
        And User clicks on login button

    Scenario: Verify that the checkout one item is successfully completed
        When User add a 'Sauce Labs Backpack' item to the cart
        And User open Cart page
        And User click on Checkout button
        And User input checkout information 'Dung' as 'First Name'
        And User input checkout information 'Pham' as 'Last Name'
        And User input checkout information '70000' as 'Zip Code'
        And User click on Continue button
        Then '1' item in the cart should be shown in checkout step two
        When User click on Finish button
        Then 'THANK YOU FOR YOUR ORDER' message should be shown when the checkout is completed

    Scenario: Verify that the checkout many items is successfully completed
        When User add a 'Sauce Labs Backpack' item to the cart
        When User add a 'Sauce Labs Bike Light' item to the cart
        And User open Cart page
        And User click on Checkout button
        And User input checkout information 'Dung' as 'First Name'
        And User input checkout information 'Pham' as 'Last Name'
        And User input checkout information '70000' as 'Zip Code'
        And User click on Continue button
        Then '2' item in the cart should be shown in checkout step two
        When User click on Finish button
        Then 'THANK YOU FOR YOUR ORDER' message should be shown when the checkout is completed

    Scenario: Verify that the checkout is unsuccessfully when missing checkout information
        When User add a 'Sauce Labs Backpack' item to the cart
        And User open Cart page
        And User click on Checkout button
        And User click on Continue button
        Then 'Error: First Name is required' error message should be shown
        And User input checkout information 'Dung' as 'First Name'
        And User click on Continue button
        Then 'Error: Last Name is required' error message should be shown
        When User input checkout information 'Pham' as 'Last Name'
        And User click on Continue button
        Then 'Error: Postal Code is required' error message should be shown

    Scenario: Verify that the checkout is unsuccessfully when user cancel checkout on "checkout step one" page
        When User add a 'Sauce Labs Backpack' item to the cart
        And User open Cart page
        And User click on Checkout button
        And User click on Cancel button
        Then 'cart.html' page is displayed

    Scenario: Verify that the checkout is unsuccessfully when user cancel checkout on "checkout step two" page
        When User add a 'Sauce Labs Backpack' item to the cart
        And User open Cart page
        And User click on Checkout button
        And User input checkout information 'Dung' as 'First Name'
        And User input checkout information 'Pham' as 'Last Name'
        And User input checkout information '70000' as 'Zip Code'
        And User click on Cancel button
        Then 'cart.html' page is displayed