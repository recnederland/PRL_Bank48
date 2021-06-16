@userInfo
Feature: US_006 USER INFO

  Background:
  Scenario: User go to GmiBank home page
    Given user go to "https://gmibank-qa-environment.com/"
    When user click on the icon
    Then user can navigate to login page
    When User enter valid username and password
    Then user navigate to User Info Page


  Scenario:User Info Segment should be editable on homepage
    When user click on the username
    Then user click on the User Info Settings Sign
    And the user navigate to User Settings page

    Scenario: User Info should be populated
      When user navigate to User Info Page
      Then user firstname, lastname and email should be populated
      And at least one language should be selected and displayed

      Scenario: TC_003 There should be an option to update firstname
        When user add a new value to his_her firstname
        Then firstname should be updated

  Scenario: TC_004 There should be an option to update lastname
    When user add a new value to his_her lastname
    Then lastname should be updated

    Scenario: TC_005 There should be an option to update email id adding "@" sign and "." extension
      When user update the email address
      Then email address should be updated with @ sign and . extension
      And . extension and @ sign should be on proper place

