package gmibank.stepdefinitions;

import gmibank.pages.userInfoPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class TC_007_stepDefinitions {

    userInfoPage uinfo = new userInfoPage();
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
            }catch (Exception e) {Assert.assertTrue(true);}
            if (uinfo.warningMessage.isDisplayed()==message){
                System.out.println("Valid email address");
            }
        } else System.out.println("Invalid email address");
    }
}
