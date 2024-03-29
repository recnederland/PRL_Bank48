package com.gmibank.stepdefinitions;

import com.gmibank.pages.US_015_MoneyAccountPage;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class US015_MoneyAccountStepDef {

    US_015_MoneyAccountPage account = new US_015_MoneyAccountPage();

    double totalBalance1;
    double totalBalance2;
    String gonderilecekParaString     = ConfigurationReader.getProperty("gonderilecekPara");
    double gonderilecekPara = Double.parseDouble(gonderilecekParaString);
    String gonderilecekParaCentString = ConfigurationReader.getProperty("gonderilecekParaCent");
    double gonderilecekParaCent = Double.parseDouble(gonderilecekParaCentString);
    double gonderilenTotal = gonderilecekPara + gonderilecekParaCent;

    @Given("User provide a valid username")
    public void duserNavigatesToSignInPage() {
        account.iconButton.click();
        Driver.wait(1);
        account.signInButtonHomePage.click();
        Driver.wait(1);
    }

    @Then("User provide a valid password")
    public void duserProvideAValidUsername() {
        account.usernameTextBox.sendKeys(ConfigurationReader.getProperty("username_transfer"));
        Driver.wait(1);
    }

    @Then("User click on the sign in button")
    public void duserProvideAValidPassword() {
        account.passwordTextBox.sendKeys(ConfigurationReader.getProperty("password_transfer"));
        Driver.wait(1);
    }

    @Then("User navigates My Accounts Page")
    public void duserClickOnTheSignInButton() {
        account.signInButtonSignInPage.click();
        Driver.wait(1);
    }

    @And("User navigates My Accounts Page")
    public void duserNavigatesMyAccountsPage() {
        account.myOperationsButton.click();
        Driver.wait(1);
        account.myAccountsButton.click();
        Driver.wait(1);
    }

    @Then("User gets the info about Users accounts balance")
    public void duserGetsTheInfoAboutUsersAccountsBalance() {
        totalBalance1 = Double.parseDouble(account.firstAccountBalance.getText());
        Driver.wait(1);
        totalBalance2 = Double.parseDouble(account.secondAccountBalance.getText());
        Driver.wait(1);
    }

//    @And("DUser navigates to Transfer Money Page")
//    public void duserNavigatesToTransferMoneyPage() {
//        account.myOperationsButton.click();
//        Driver.wait(1);
//        account.transferMoneyButton.click();
//        Driver.wait(1);
//    }
}