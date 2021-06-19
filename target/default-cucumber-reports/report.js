$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_008.feature");
formatter.feature({
  "name": "US_008 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 The old password should not be used",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tc2"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the current password as a new password in the new password box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordAsANewPasswordInTheNewPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "warning message should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.warningMessageShouldBeDisplayed()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat gmibank.stepdefinitions.US_008.US_008_stepDefinitions.warningMessageShouldBeDisplayed(US_008_stepDefinitions.java:60)\r\n\tat ✽.warning message should be displayed(file:///C:/Users/oguzh/IdeaProjects/PRL_Bank48/src/test/resources/features/US_008.feature:21)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.step({
  "name": "new password \"\u003cpasswords\u003e\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"\u003cpasswords\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "passwords"
      ]
    },
    {
      "cells": [
        "abcdefg"
      ]
    },
    {
      "cells": [
        "ABCDEFg"
      ]
    },
    {
      "cells": [
        "123456a"
      ]
    },
    {
      "cells": [
        "!@#$%^g"
      ]
    },
    {
      "cells": [
        "ABCDE1g"
      ]
    },
    {
      "cells": [
        "ABCDE!g"
      ]
    },
    {
      "cells": [
        "ABCD1@g"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.powerStrengthBarShouldBeEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new password \"abcdefg\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.newPasswordShouldContainAtLeastOneLowerCaseCharacter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"abcdefg\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.passwordStrengthBarLevelShouldChangeAccordinglyWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.powerStrengthBarShouldBeEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new password \"ABCDEFg\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.newPasswordShouldContainAtLeastOneLowerCaseCharacter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"ABCDEFg\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.passwordStrengthBarLevelShouldChangeAccordinglyWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.powerStrengthBarShouldBeEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new password \"123456a\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.newPasswordShouldContainAtLeastOneLowerCaseCharacter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"123456a\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.passwordStrengthBarLevelShouldChangeAccordinglyWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.powerStrengthBarShouldBeEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new password \"!@#$%^g\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.newPasswordShouldContainAtLeastOneLowerCaseCharacter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"!@#$%^g\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.passwordStrengthBarLevelShouldChangeAccordinglyWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.powerStrengthBarShouldBeEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new password \"ABCDE1g\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.newPasswordShouldContainAtLeastOneLowerCaseCharacter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"ABCDE1g\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.passwordStrengthBarLevelShouldChangeAccordinglyWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.powerStrengthBarShouldBeEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new password \"ABCDE!g\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.newPasswordShouldContainAtLeastOneLowerCaseCharacter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"ABCDE!g\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.passwordStrengthBarLevelShouldChangeAccordinglyWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to \"https://gmibank-qa-environment.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.GmiBankStepDefinition\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d91.0.4472.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HHUH2RN\u0027, ip: \u0027192.168.10.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.106, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\oguzh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56433}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d5e07ce8ab41dccc5eb00e77e9093711\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:57)\r\n\tat gmibank.pages.GmiBankPage.\u003cinit\u003e(GmiBankPage.java:11)\r\n\tat gmibank.stepdefinitions.GmiBankStepDefinition.\u003cinit\u003e(GmiBankStepDefinition.java:10)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_click_on_the_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_can_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate to User Info Page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.loginStepDefinition.user_navigate_to_User_Info_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the username",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_006.userInfoStepDefinition.userClickOnTheUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the password on the icon",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userSelectThePasswordOnTheIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate to account password page",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userNavigateToAccountPasswordPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc3"
    },
    {
      "name": "@US_008"
    }
  ]
});
formatter.step({
  "name": "user enter the current Password in the current password box",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.userEnterTheCurrentPasswordInTheCurrentPasswordBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "power strength bar should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.powerStrengthBarShouldBeEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new password \"ABCD1@g\" should contain at least one lower case character",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.newPasswordShouldContainAtLeastOneLowerCaseCharacter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Password strength bar level should change accordingly with \"ABCD1@g\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_008.US_008_stepDefinitions.passwordStrengthBarLevelShouldChangeAccordinglyWith(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d91.0.4472.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HHUH2RN\u0027, ip: \u0027192.168.10.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.106, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\oguzh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56433}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d5e07ce8ab41dccc5eb00e77e9093711\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:57)\r\n\tat gmibank.stepdefinitions.Hooks.tearDown(Hooks.java:19)\r\n",
  "status": "failed"
});
});