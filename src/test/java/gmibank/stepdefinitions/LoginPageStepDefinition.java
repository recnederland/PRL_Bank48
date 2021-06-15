package gmibank.stepdefinitions;

import gmibank.pages.LoginPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;


public class LoginPageStepDefinition {

    LoginPage loginPage= new LoginPage();
    Actions actions=new Actions(Driver.getDriver());


    @Given("User goes to home page {string}")
    public void userGoesToHomePage(String url) {
        Driver.getDriver().get(ConfigurationReader.getProperty(url));
    }

    @Given("User clicks login icon")
    public void userClicksLoginIcon() {
       Driver.getDriver().manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        loginPage.loginDropdownIcon.click();

    }

    @And("User clicks Sign in button")
    public void userClicksSignInButton() {
        loginPage.signInButton.click();
    }

    @When("User enters valid credantials username {string} and password {string} on the pop-up page")
    public void userEntersValidCredantialsUsernameAndPasswordOnThePopUpPage(String username, String password) {
        loginPage.UserNameBox.sendKeys(username);
        loginPage.passwordBox.sendKeys(password);
    }

    @And("User clicks signin button on the pop-up page")
    public void userClicksSigninButtonOnThePopUpPage() {
       loginPage.popupPageSignInButton.click();
    }

    @Then("User should login")
    public void userShouldLogin() {
        Assert.assertTrue(loginPage.myOperationsIcon.isDisplayed());
    }

    @When("User enters  valid and invalid credantials username {string} and password {string} on the pop-up page")
    public void userEntersValidAndInvalidCredantialsUsernameAndPasswordOnThePopUpPage(String username1, String password1) {
    loginPage.UserNameBox.sendKeys(username1);
    loginPage.passwordBox.sendKeys(password1);
    }

    @And("User clicks cancel button")
    public void userClicksCancelButton() {
    loginPage.cancelButton.click();
    }

    @Then("User should return to home page")
    public void userShouldReturnToHomePage() {


    }


}