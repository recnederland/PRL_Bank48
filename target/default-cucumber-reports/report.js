$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US012_ManageCustomer.feature");
formatter.feature({
  "name": "US012 An Employee can manage Customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US012"
    }
  ]
});
formatter.background({
  "name": "Sign_in and navigation to manage customer page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Employee at the homepage \"gmibank_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.employee_at_the_homepage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks the human icon at the right top",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.clicks_the_human_icon_at_the_right_top()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chooses sign in option",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.chooses_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gives \"username_employee\" to username textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.gives_to_username_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gives \"password_employee\" to password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.gives_to_password_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.clicks_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee sign in successfully",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.employee_sign_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks the my operations area",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.clicks_the_my_operations_area()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chooses manage customer option",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.chooses_manage_customer_option()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC003_There should be an Edit button where all customer information can be populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US012"
    },
    {
      "name": "@US012_TC003"
    }
  ]
});
formatter.step({
  "name": "kullanici ekranda edit butonlarindan birini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US012_ManageCustomerStepDefinition.kullanici_ekranda_edit_butonlarindan_birini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});