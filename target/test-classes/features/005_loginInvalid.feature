Feature:


  Scenario Outline:  TC_0001 There should be a valid username and password validating the success message to login

    Given User goes to home page "homepage_url"
    And User clicks login icon
    And User clicks Sign in button
    When User enters valid credantials username "<username>" and password "<password>" on the pop-up page
    And User clicks signin button on the pop-up page
    Then User should login

    Examples:
      | username    | password     |
      | team48admin | Team48admin. |