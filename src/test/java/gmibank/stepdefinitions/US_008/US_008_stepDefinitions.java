package gmibank.stepdefinitions.US_008;

import gmibank.pages.US_008_accountPasswordPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class US_008_stepDefinitions {
    US_008_accountPasswordPage accpassword = new US_008_accountPasswordPage();

    @When("user select the password on the icon")
    public void userSelectThePasswordOnTheIcon() {
        accpassword.passwordOnTheIcon.click();
    }

    @Then("user navigate to account password page")
    public void userNavigateToAccountPasswordPage() {
        String expectedURL = "https://gmibank-qa-environment.com/account/password";
        String actualURL = Driver.getDriver().getCurrentUrl();
        System.out.println("actualURL is = " + actualURL);
        Assert.assertEquals(" URL does not matched ", expectedURL, actualURL);
    }

    @And("user can not leave blank to current password box")
    public void userCanNotLeaveBlankToCurrentPasswordBox() {
        accpassword.currentPassword.click();
        accpassword.currentPassword.sendKeys(Keys.ENTER);
        if (accpassword.invalidFeedbackCurrentPassword.isDisplayed()) {
            System.out.println("Current password is required and it didn't entered");
        } else {
            System.out.println("Invalid message didn`t displayed");
        }

    }

    //TC_02
    @And("user enter the current Password in the current password box")
    public void userEnterTheCurrentPasswordInTheCurrentPasswordBox() {
        accpassword.currentPassword.sendKeys("Team48admin.");
    }

    //TC_02
    @Then("user enter the current password as a new password in the new password box")
    public void userEnterTheCurrentPasswordAsANewPasswordInTheNewPasswordBox() {
        accpassword.newPassword.sendKeys("Team48admin.");
    }

    //TC_02
    @And("warning message should be displayed")
    public void warningMessageShouldBeDisplayed() {
        try {
            Assert.assertTrue(accpassword.invalidFeedbackNewPassword.isDisplayed());
            System.out.println("Warning message is displayed");
        } catch (Exception e) {
            System.out.println("Warning message is not displayed.There is a bug!!!");
            Assert.fail();
        }
    }


    @And("power strength bar should be empty")
    public void powerStrengthBarShouldBeEmpty() {
        //if power strength bar is not empty
        String emptyValue = "";
        if (accpassword.newPassword.getAttribute("value") == emptyValue) {
            if (!accpassword.passwordStrengthBar0.isDisplayed()) {
                System.out.println("Power strength bar is not empty. There is a bug!!!");
            }
        }
    }

    @Then("new password {string} should contain at least one lower case character")
    public void newPasswordShouldContainAtLeastOneLowerCaseCharacter(String passwords) {

        if (passwords.matches(("(?=.*[a-z]).*"))) {
            System.out.println("There is at least 1 lower case character");
        } else
            System.out.println("Password has no lower case character, password is " + passwords);
    }

    @And("Password strength bar level should change accordingly with {string}")
    public void passwordStrengthBarLevelShouldChangeAccordinglyWith(String passwords) {

        int count = 0;
        accpassword.newPassword.sendKeys(passwords);
        //We assume that there are 7 chars

        if (passwords.matches(("(?=.*[a-z]).*"))) {
            if (passwords.matches("(?=.*[0-9]).*") &&
                passwords.matches("(?=.*[A-Z]).*") &&
                passwords.matches("(?=.*[~!@#$%^&*()_-]).*")) {
                for (int i = 1; i <= 5; i++) {
                    Driver.wait(2);
                    if (Driver.getDriver().findElement
                    (By.xpath("//"+"li[@style=\"background-color: rgb(221, 221, 221);\"]" + "[" + i + "]")).isDisplayed()) ;
                    { count += 1;}}
                     }
            if (count == 1){
                System.out.println("Power strength bar changed accordingly");
            }else {
                System.out.println("Power strength bar does not changed accordingly. There is a bug!!!"); }


        }else { System.out.println("There is no any lower case character"); }


    }


}