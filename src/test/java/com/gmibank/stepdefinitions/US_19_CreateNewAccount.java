package com.gmibank.stepdefinitions;

import com.gmibank.pages.BasePage;
import com.gmibank.pages.LoginPage;
import com.gmibank.pages.RegistrationAndHomePage;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class US_19_CreateNewAccount extends BasePage{

    RegistrationAndHomePage createAccount = new RegistrationAndHomePage();
    LoginPage createNewAccount = new LoginPage();
    String username = ConfigurationReader.getProperty("username_manager");
    String password = ConfigurationReader.getProperty("password_manager");
    public Object Date;

    @Given("Manager on the {string}")
    public void managerOnThe(String arg0) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_url"));
        Driver.wait(2);
    }

    @And("Manager navigates to sign in page")
    public void managerNavigatesToSignInPage() {
        createAccount.iconButton.click();
        Driver.wait(2);
        createAccount.signInTik.click();
        Driver.wait(2);
    }

    @Then("Manager provide a valid {string} username")
    public void managerProvideAValidUsername(String string) {
        createAccount.usernameSignIn.sendKeys(username);
        Driver.wait(2);
    }

    @And("Manager provide a valid {string} password")
    public void managerProvideAValidPassword(String string) {
        createAccount.passwordSignin.sendKeys(password);
        Driver.wait(2);
    }

    @And("Manager should be My Operations click")
    public void managerShouldBeMyOperationsClick() {
        createAccount.myOperationsButton.click();
    }

    @Then("Manager should be Manage Accounts click")
    public void managerShouldBeManageAccountsClick() {
        createAccount.accountMenu.click();
    }

    @And("Manager should be write a description")
    public void managerShouldBeWriteADescription() {
    }

    @And("Manager should be write a balance")
    public void managerShouldBeWriteABalance() {
    }

    @And("Manager can select an acoount type")
    public void managerCanSelectAnAcoountType() {
    }

    @And("Manager should type defined an account status type")
    public void managerShouldTypeDefinedAnAccountStatusType() {
    }

    @Then("Manager can select an employee from the drop-down")
    public void managerCanSelectAnEmployeeFromTheDropDown() {
    }
}
