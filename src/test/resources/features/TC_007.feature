
@TC_007
  Feature: TC_007 System should not allow to make updates with invalid credentials
    Background:
    Scenario: User go to GmiBank home page
      Given user go to "https://gmibank-qa-environment.com/"
      When user click on the icon
      Then user can navigate to login page
      When User enter valid username and password
      Then user navigate to User Info Page
      When user click on the username
      Then user click on the User Info Settings Sign
      And the user navigate to User Settings page

    Scenario Outline: TC_001 Email id cannot contain just digits or chars without "@" sign or "." extension
      When user enter new "<email_address>"
      Then email address can not contain @ sign or . extension in proper way


      Examples:
      | email_address          |
      | team48adminhotmailcom  |
      | team48admingmail.com   |
      | team48amdmin@hotmailcom|
      | team48@hotmailcom.     |
      | team48@gmail.          |
      | team48admin@gmail.com  |

      Scenario: There should not be any option of any other language other than English or Turkish
        When

