$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserStory-09.feature");
formatter.feature({
  "name": "Create a new customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US-09"
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
  "name": "click on  My Operations",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankUs09StepDefinition.clickOnMyOperations()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[normalize-space()\u003d\u0027My Operations\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.101)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9N8UAQH\u0027, ip: \u0027192.168.188.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.101, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\hidir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61992}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4ef4cc509e509128fa9e034835cde76e\n*** Element info: {Using\u003dxpath, value\u003d//span[normalize-space()\u003d\u0027My Operations\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.GmiBankUs09StepDefinition.clickOnMyOperations(GmiBankUs09StepDefinition.java:17)\r\n\tat ✽.click on  My Operations(file:///C:/Users/hidir/IdeaProjects/PRL_Bank48/src/test/resources/features/UserStory-09.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankUs09StepDefinition.clickOnManageCustomers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Create a new Customer",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankUs09StepDefinition.click_on_Create_a_new_Customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can search for a new applicant by their SSN and see all their registration info populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US-09"
    },
    {
      "name": "@US09-TC1"
    }
  ]
});
formatter.step({
  "name": "given valid value in the ssn field",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankUs09StepDefinition.given_value_in_the_ssn_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankUs09StepDefinition.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that all information is displayed when search is clicked.",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankUs09StepDefinition.verifyThatAllInformationIsDisplayedWhenSearchIsClicked(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
});