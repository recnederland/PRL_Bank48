$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/database.feature");
formatter.feature({
  "name": "Database Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.scenario({
  "name": "User connect database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user connect database and print all data",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.DatabaseStepDefinition.user_connect_database_and_print_all_data()"
});
formatter.result({
  "status": "passed"
});
});