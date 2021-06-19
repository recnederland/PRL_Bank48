Feature: US_008 Password segment on Homepage should be editable

  Background:
    Given user go to "https://gmibank-qa-environment.com/"
    When user click on the icon
    Then user can navigate to login page
    When User enter valid username and password
    Then user navigate to User Info Page
    When user click on the username
    When user select the password on the icon
    Then user navigate to account password page

  @tc1
  Scenario:  TC_001 User can not leave blank to current password box
    And user can not leave blank to current password box

  @tc2 @US_008
  Scenario: TC_002 The old password should not be used
    And user enter the current Password in the current password box
    Then user enter the current password as a new password in the new password box
    And warning message should be displayed

  @tc3 @US_008
  Scenario Outline: There should be at least 1 lowercase char for stronger password
    When user enter the current Password in the current password box
    And power strength bar should be empty
    Then new password "<passwords>" should contain at least one lower case character
    And Password strength bar level should change accordingly with "<passwords>"

    Examples:
      | passwords |
      | abcdefg   |
      | ABCDEFg   |
      | 123456a   |
      | !@#$%^g   |
      | ABCDE1g   |
      | ABCDE!g   |
      | ABCD1@g   |


