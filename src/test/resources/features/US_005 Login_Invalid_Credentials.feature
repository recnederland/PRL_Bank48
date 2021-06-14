Feature: US_005 Login Feature - Incalid Credentials
  User Story: Login page should not be accessible with invalid credentials

  Background: Back story is user is on the login page
    Given User is on the login page

  @login_invalid
  Scenario Outline: User login scenario
    When User logs in by "<username>" and "<password>"
    Then User should see error message

    Examples:
      | username    | password |
      | invalidusername  | Admin42- |
      | invalidusername  | Manager42- |
      | invalidusername  | Employee42- |
      | invalidusername  | Customer42- |
      |                  | Customer42- |
      | admin42         | invalidPassword1- |
      | manager42       | invalidPassword1- |
      | employee42      | invalidPassword1- |
      | customer42      | invalidPassword1- |
      | customer42      |                   |
      | invalidusername | invalidPassword1- |
      |                 |                   |

  @login_resetPassword
  Scenario Outline: User login scenario
    When User logs in by "<username>" and "<password>"
    Then User should see error message
    Then Reset password link is available

    Examples:
      | username    | password |
      | invalidusername | invalidPassword1- |

  @login_navigateToRegistration
  Scenario Outline: User login scenario
    When User logs in by "<username>" and "<password>"
    Then User should see error message
    Then User clicks register new account
    Then User is navigated to Registration Page

    Examples:
      | username    | password |
      | invalidusername | invalidPassword1- |