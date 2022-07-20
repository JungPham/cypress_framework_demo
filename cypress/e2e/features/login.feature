Feature: Login function
    As a user, I want to login app successfully

    Background: 
        Given User is on login page

    Scenario: Verify if user is logged in successfully
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the website
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario: Verify if user is logged in unsuccessfully with wrong credentials
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is not able to login to the website
        And The error message 'Username and password do not match any user' is displayed
        Examples:
            | username       | password       |
            | wrong_username | secret_sauce   |
            | standard_user  | wrong_password |
            | wrong_username | wrong_password |

    Scenario: Verify if user is logged in unsuccessfully with locked out credentials
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is not able to login to the website
        And The error message 'Sorry, this user has been locked out.' is displayed
        Examples:
            | username        | password     |
            | locked_out_user | secret_sauce |
