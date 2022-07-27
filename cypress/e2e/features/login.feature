Feature: Login function
    As a user, I want to login app successfully

    Background: 
        Given User is on login page

    Scenario: Verify if user is logged in successfully
        When User logins with username as '<username>' and password as '<password>'
        Then User is able to successfully login to the website
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario: Verify if user is logged in unsuccessfully with invalid credentials
        When User logins with username as '<username>' and password as '<password>'
        Then User is not able to login to the website
        And The error message '<error_message>' is displayed
        Examples:
            | username        | password       | error_message                               |
            | wrong_username  | secret_sauce   | Username and password do not match any user |
            | standard_user   | wrong_password | Username and password do not match any user |
            | wrong_username  | wrong_password | Username and password do not match any user |
            | locked_out_user | secret_sauce   | Sorry, this user has been locked out.       |
