@gmibankhomepage
  Feature: Go to home page
    Scenario: User go to GmiBank home page
      Given user go to "https://gmibank-qa-environment.com/"
      When user click on the icon
      And user can navigate to login page