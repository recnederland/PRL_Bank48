$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_015_AccountsView.feature");
formatter.feature({
  "name": "US015 Show Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@showAccount"
    }
  ]
});
formatter.scenario({
  "name": "User does every step to transfer money between user\u0027s accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@showAccount"
    }
  ]
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User provide a valid username",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User provide a valid password",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on the sign in button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User navigates My Accounts Page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User gets the info about Users accounts balance",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});