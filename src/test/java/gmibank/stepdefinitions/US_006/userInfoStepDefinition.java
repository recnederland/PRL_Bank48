package gmibank.stepdefinitions.US_006;

import gmibank.pages.US_06_UserInfoSegment;
import gmibank.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.Arrays;
import java.util.List;

public class userInfoStepDefinition {

    US_06_UserInfoSegment uinfo = new US_06_UserInfoSegment();

    String newFirstName;
    String newLastName;
    String newEmail;

    @Then("the user navigate to User Settings page")
    public void the_user_navigate_to_User_Settings_page() {

        Driver.waitForPageToLoad(3);
        String expectedUrl = "https://gmibank-qa-environment.com/account/settings";
        String actualUrl = Driver.getDriver().getCurrentUrl();
        System.out.println("actualUrl = " + actualUrl);
        System.out.println("expectedUrl = " + expectedUrl);

    }

    @When("user click on the username")
    public void userClickOnTheUsername() {
        Driver.wait(2);
        uinfo.lDropdown.click();
    }

    @Then("user click on the User Info Settings Sign")
    public void userClickOnTheUserInfoSettingsSign() {
       Driver.wait(1);
        uinfo.userInfo.click(); }

    @And("at least one language should be selected and displayed")
    public void atLeastOneLanguageShouldBeSelectedAndDisplayed() {
        Select languages = new Select(uinfo.languages);
        List<WebElement> allLanguages = languages.getOptions();
        for(WebElement w: allLanguages){
            System.out.println(w.getText()); }
        System.out.println("allLanguages.size() = " + Arrays.deepToString(allLanguages.toArray()));
        List<String> expectedLanguages = Arrays.asList("English","Türkçe");
//        Assert.assertEquals("do not matches",expectedLanguages,allLanguages);

    }
    @Then("user firstname, lastname and email should be populated")
    public void userFirstnameLastnameAndEmailShouldBePopulated() {
        String expectedFirstName = "team48adminfirst";
        String expectedLastName = "team48adminlast";
        String expectedEmail = "team48admin@gmail.com";
        String actualFirstName = uinfo.firstName.getAttribute("value");
        String actualLastName = uinfo.lastName.getAttribute("value");
        String actualemail = uinfo.email.getAttribute("value");


    }
    @When("user add a new value to his_her firstname")
    public void userAddANewValueToHisHerFirstname() {
        String newValue = "changed";
        String originalFirstName = uinfo.firstName.getAttribute("value");
        newFirstName = originalFirstName.concat(newValue);
        uinfo.firstName.clear();
        uinfo.firstName.sendKeys(newFirstName);
    }

    @Then("firstname should be updated")
    public void firstnameShouldBeUpdated() {
        String actNewFirstName = uinfo.firstName.getAttribute("value");
        String expNewFirstName = newFirstName;
        Assert.assertEquals(expNewFirstName,actNewFirstName);
        System.out.println("expNewFirstName = " + expNewFirstName);
        System.out.println("actNewFirstName = " + actNewFirstName);
    }


    @When("user add a new value to his_her lastname")
    public void userAddANewValueToHis_herLastname() {
        String newValue = "updated";
        String originalLastName = uinfo.lastName.getAttribute("value");
        newLastName = originalLastName.concat(newValue);
        uinfo.lastName.clear();
        uinfo.lastName.sendKeys(newLastName);

    }

    @Then("lastname should be updated")
    public void lastnameShouldBeUpdated() {
        String actNewLastName = uinfo.lastName.getAttribute("value");
        String expNewLastName = newLastName;
        Assert.assertEquals(expNewLastName,actNewLastName);
        System.out.println("expNewFirstName = " + expNewLastName);
        System.out.println("actNewFirstName = " + expNewLastName);
    }

    @When("user update the email address")
    public void userUpdateTheEmailAddress() {
        String originalEmail = uinfo.email.getAttribute("value");
        uinfo.email.clear();
        newEmail = "team58admin@hotmailcom.";
        uinfo.email.sendKeys(newEmail);
    }

    @Then("email address should be updated with @ sign and . extension")
    public void emailAddressShouldBeUpdatedWithSignAndExtension() {
        String originalEmail = uinfo.email.getAttribute("value");
        Assert.assertTrue("contains @ sign", originalEmail.contains("@"));
        Assert.assertTrue("contains . extension", originalEmail.contains("@"));
    }
    @And(". extension and @ sign should be on proper place")
    public void extensionAndSignShouldBeOnProperPlace() {
        System.out.println("Warning message= " + uinfo.warningMessage.getText());


    }
}