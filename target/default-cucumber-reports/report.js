$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Us_016_MoneyTransfer.feature");
formatter.feature({
  "name": "US016 Money Transfer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MoneyTransfer"
    }
  ]
});
formatter.scenario({
  "name": "User does every step to transfer money between user\u0027s accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MoneyTransfer"
    }
  ]
});
formatter.step({
  "name": "User on the \"gmibank_url\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User navigates to sign in page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User provide a valid username \"username_transfer\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User provide a valid password \"password_transfer\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on the sign in button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User navigates to Transfer Money Page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User does the money transfer",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User validates that User s money transferred successfully",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});