$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/userInfoSegment.feature");
formatter.feature({
  "name": "US_006 USER INFO",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@userInfo"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "    Feature: Go to home page",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "User go to GmiBank home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@userInfo"
    }
  ]
});
formatter.step({
  "name": "user go to \"http://www.gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GmiBankStepDefinition.user_go_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "    Feature: Go to home page",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "User Info Segment should be editable on homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@userInfo"
    }
  ]
});
formatter.step({
  "name": "the user click on the user name",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.userInfoStepDef.the_user_click_on_the_user_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Info options should be visible",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.userInfoStepDef.user_Info_options_should_be_visible()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"partial link text\",\"selector\":\"//span[contains(text(),\"User Info\")]\"}\n  (Session info: chrome\u003d91.0.4472.77)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HHUH2RN\u0027, ip: \u0027192.168.10.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.77, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\oguzh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57122}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 212aad1615a4299aa5a4fffb30e25f92\n*** Element info: {Using\u003dpartial link text, value\u003d//span[contains(text(),\"User Info\")]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByPartialLinkText(RemoteWebDriver.java:388)\r\n\tat org.openqa.selenium.By$ByPartialLinkText.findElement(By.java:250)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat gmibank.stepdefinitions.userInfoStepDef.user_Info_options_should_be_visible(userInfoStepDef.java:30)\r\n\tat ✽.User Info options should be visible(file:///C:/Users/oguzh/IdeaProjects/PRL_Bank48/src/test/resources/features/userInfoSegment.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user click on the User Info",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.userInfoStepDef.the_user_click_on_the_User_Info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigate to User Settings page",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.userInfoStepDef.the_user_navigate_to_User_Settings_page()"
});
formatter.result({
  "status": "skipped"
});
});