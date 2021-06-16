package gmibank.stepdefinitions;

import gmibank.pages.loginPage;
import gmibank.pages.loginPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class loginStepDefinition {

    loginPage loginPage = new loginPage();

    @When("User enter valid username and password")
    public void user_enter_valid_username_and_password() {
        loginPage.userName.sendKeys("team48admin");
        loginPage.password.sendKeys("Team48admin.");
        Driver.wait(1);
        loginPage.submit.click();

    }

    @Then("user navigate to User Info Page")
    public void user_navigate_to_User_Info_Page() {
        String actualURL = Driver.getDriver().getCurrentUrl();
        String expectedURL = "https://gmibank-qa-environment.com/login";
       // Assert.assertEquals(expectedURL,actualURL);
        System.out.println("actualURL = " + actualURL);
    }


}
