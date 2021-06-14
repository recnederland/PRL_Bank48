package com.gmibank.stepdefinitions;

import com.gmibank.pages.LoginPage;
import com.gmibank.pages.RegistrationPage;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefitnitions {

    LoginPage loginPage = new LoginPage();
    RegistrationPage registrationPage = new RegistrationPage();

    @Given("User is on the login page")
    public void userIsOnTheLoginPage() throws InterruptedException {

        loginPage.accountMenu.click();
        loginPage.loginItem.click();

    }

    @When("User logs in by {string} and {string}")
    public void userLogsInByAnd(String userName, String password) throws InterruptedException {


        loginPage.userNameTextBox.sendKeys(userName);
        loginPage.passwordTextBox.sendKeys(password);
        Thread.sleep(1000);
        //Driver.getDriver().manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        loginPage.signInButton.click();


    }

    @Then("User should see dashboard")
    public void userShouldSeeDashboard() throws InterruptedException {

        Thread.sleep(1000);
        Assert.assertTrue(loginPage.myOperationsButton.isDisplayed());
        Thread.sleep(1000);


    }

    @Then("User signs out")
    public void userSignsOut() throws InterruptedException {
        loginPage.accountMenu.click();
        Thread.sleep(1000);
        loginPage.signoutItem.click();
    }

    @Then("User clicks cancel")
    public void userClicksCancel() {
        loginPage.cancelButton.click();
    }

    @Then("User should go back to home page")
    public void userShouldGoBackToHomePage() {
        Assert.assertEquals(Driver.getDriver().getCurrentUrl(), ConfigurationReader.getProperty("gmibank_url"));
    }

    @Then("User should see error message")
    public void userShouldSeeErrorMessage() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertTrue(loginPage.failedToSignInAlert.isDisplayed());

    }

    @Then("Reset password link is available")
    public void resetPasswordLinkIsAvailable() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertTrue(loginPage.forgetPasswordLink.isEnabled());
    }

    @When("User clicks register new account")
    public void userClicksRegisterNewAccount() throws InterruptedException {
        Thread.sleep(1000);
        loginPage.registerNewAccountLink.click();
    }

    @Then("User is navigated to Registration Page")
    public void userIsNavigatedToRegistrationPage() {
        Assert.assertEquals("Registration", registrationPage.registrationTitle.getText());
    }
}
