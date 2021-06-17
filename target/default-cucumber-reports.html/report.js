$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_015_AccountsView.feature");
formatter.feature({
  "name": "US015 Account Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@showAccount"
    }
  ]
});
formatter.scenario({
  "name": "User can see all account types and balances",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@showAccount"
    }
  ]
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
  "name": "DUser navigates to sign in page",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US015_MoneyAccountStepDef.duserNavigatesToSignInPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DUser provide a valid username",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US015_MoneyAccountStepDef.duserProvideAValidUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DUser provide a valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US015_MoneyAccountStepDef.duserProvideAValidPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US016_MoneyTransferStepDef.duserClickOnTheSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DUser navigates My Accounts Page",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US015_MoneyAccountStepDef.duserNavigatesMyAccountsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DUser gets the info about Users accounts balance",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US015_MoneyAccountStepDef.duserGetsTheInfoAboutUsersAccountsBalance()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DUser finds and validates the Account Type webelement on the page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "DUser finds and validates the Balance webelement on the page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});