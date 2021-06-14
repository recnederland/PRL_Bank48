@adminAccountCreate19
Feature: An Admin can manage an Account
  Background: Manager goes to the home page and navigates to the manage account link
    Given Manager on the "gmibank_url"
    And Manager navigates to sign in page
    Then Manager provide a valid "username_manager" username
    And Manager provide a valid "password_manager" password
    And Manager should be My Operations click
    Then Manager should be Manage Accounts click

  Scenario:  Manager sould create a new account
    And Manager should be write a description
    And Manager should be write a balance
    And Manager can select an acoount type
    And Manager should type defined an account status type
    Then Manager can select an employee from the drop-down
