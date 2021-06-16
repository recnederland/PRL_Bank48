
@loginPage
Feature: US_006 LoginPage

  Background:
    Given user go to "https://gmibank-qa-environment.com/"
    When user click on the icon
    And user can navigate to login page

  Scenario: User Login to User Info page
    When User enter valid username and password
    Then user navigate to User Info Page