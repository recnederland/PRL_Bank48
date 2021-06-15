Feature: Login Page

  Background:
    Given User goes to home page "homepage_url"
    And User clicks login icon

  @wip
  Scenario Outline:  TC_0001 There should be a valid username and password validating the success message to login


    And User clicks Sign in button
    When User enters valid credantials username "<username>" and password "<password>" on the pop-up page
    And User clicks signin button on the pop-up page
    Then User should login

    Examples:
      | username       | password        |
      | team48admin    | Team48admin.    |
      | team48manager  | Team48manager.  |
      | team48employee | Team48employee. |
      | team48customer | Team48customer. |



  Scenario Outline: US_0004 TC_0005 There should be an option to cancel login
    And User clicks Sign in button
    When User enters  valid and invalid credantials username "<username1>" and password "<password1>" on the pop-up page
    And User clicks cancel button
    Then User should return to home page

    Examples:
      | username1      | password1       |
      |                |                 |
      | vvv48manageefe | Team48manager.  |
      | gggdfgfg       | Team48employee. |
      | team48customer | Team48customer. |


