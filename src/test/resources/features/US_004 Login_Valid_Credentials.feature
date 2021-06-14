Feature: US_004 Login Feature
  User Story: Login page should accessible with valid credentials

  Background: Back story is user is on the login page
    Given User is on the login page

  @login1
  Scenario Outline: User login scenario
    When User logs in by "<username>" and "<password>"
    Then User should see dashboard
    Then User signs out

    Examples:
      | username    | password |
      | admin42     | Admin42- |
      | manager42  | Manager42- |
      | employee42  | Employee42- |
      | customer42  | Customer42- |

  @login2
  Scenario Outline: User login scenario
    When User logs in by "<username>" and "<password>"
    Then User clicks cancel
    Then User should go back to home page

    Examples:
      | username    | password |
      | customer42  | Customer42- |