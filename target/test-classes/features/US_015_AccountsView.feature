@showAccount
Feature: US015 Show Account
  Scenario: User does every step to transfer money between user's accounts
    Given User is on the login page
    When User provide a valid username
    Then User provide a valid password
    And User click on the sign in button
    And User navigates My Accounts Page
    Then User gets the info about Users accounts balance
