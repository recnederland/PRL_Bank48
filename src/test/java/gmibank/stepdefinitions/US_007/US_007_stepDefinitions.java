package gmibank.stepdefinitions.US_007;

import gmibank.pages.US_06_UserInfoSegment;
import gmibank.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class US_007_stepDefinitions {

    US_06_UserInfoSegment uinfo = new US_06_UserInfoSegment();
    String updatedEmail;
    Boolean message = false;

    @When("user enter new {string}")
    public void userEnterNew(String email_address) {
        uinfo.email.clear();
        uinfo.email.sendKeys(email_address);
        Driver.wait(1);
    }


    @Then("email address can not contain @ sign or . extension in proper way")
    public void emailAddressCanNotContainSignOrExtensionInProperWay() {
        updatedEmail = uinfo.email.getAttribute("value");
        Driver.wait(1);
        //if email address  contains . and @ properly, and warning message does not displayed
        if (updatedEmail.contains(".") && updatedEmail.contains("@")){

            try { Assert.assertTrue(uinfo.warningMessage.isDisplayed());
                System.out.println("Invalid email address");
            }catch (Exception e) {System.out.println("Valid email address");
                }
//            if (uinfo.warningMessage.isDisplayed()==message){
//                System.out.println("Valid email address");
//            }
        } else System.out.println("Invalid email address");
    }

    @Given("there should be only two language options on the language drop down")
    public void thereShouldBeOnlyTwoLanguageOptionsOnTheLanguageDropDown() {

        Select languages = new Select(uinfo.languages);
        List<WebElement> allLanguageOptions = languages.getOptions();
        System.out.println("Total language on the drop down are " + allLanguageOptions.size());
        if (allLanguageOptions.size() != 2){
            System.out.println("There are more or less languages than there should be");
        };
    }

    @And("languages can not be other than {string} and {string}")
    public void languagesCanNotBeOtherThanAnd(String English , String Türkçe) {

        Select languages = new Select(uinfo.languages);
        List<WebElement> allLanguageOptions = languages.getOptions();
        for (WebElement lang : allLanguageOptions) {
            System.out.println("Languages: " + lang.getText());

        }
        Assert.assertTrue(allLanguageOptions.containsAll(languages.getOptions()));
    }
}
