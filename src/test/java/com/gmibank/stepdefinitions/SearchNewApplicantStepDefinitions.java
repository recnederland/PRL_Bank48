package com.gmibank.stepdefinitions;

import com.gmibank.pages.CreateOrEditCustomerPage;
import com.gmibank.pages.ManageCustomersPage;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class SearchNewApplicantStepDefinitions {

    ManageCustomersPage manageCustomersPage = new ManageCustomersPage();
    CreateOrEditCustomerPage createOrEditCustomerPage = new CreateOrEditCustomerPage();

    @And("User navigates to Manage Customers Page")
    public void userNavigatesToManageCustomersPage() {

        Driver.waitAndClick(manageCustomersPage.myOperationsButton, 2);
        Driver.waitAndClick(manageCustomersPage.manageCustomersButton, 2);
    }

    @Then("User navigates to Create or Edit Customers Page")
    public void userNavigatesToCreateOrEditCustomersPage() {

        Driver.waitAndClick(manageCustomersPage.createNewCustomerButton, 2);
    }

    @Then("User searches the {string}")
    public void userSearchesThe(String ssn) {
        Driver.waitAndSendText(createOrEditCustomerPage.searchSsnTextBox, ssn, 2);
        Driver.waitAndClick(createOrEditCustomerPage.searchButton, 2);
    }

    @Then("User should see the info pupolated\\(i.e.first name)")
    public void userShouldSeeTheInfoPupolatedIEFirstName() {
        //Driver.waitAndSendText(createOrEditCustomerPage.customerFirstNameTextBox, "Ahmet", 2);
        //String firstName = Driver.waitAndGetText(createOrEditCustomerPage.customerFirstNameTextBox, 2);
       // System.out.println("firstName = " + firstName);
        //Assert.assertTrue(firstName != null);
        //Assert.assertTrue(createOrEditCustomerPage.toastSuccess.isEnabled());

        //Driver.waitForVisibility(createOrEditCustomerPage.toastSuccess, 2);
        String message = createOrEditCustomerPage.toastSuccess.getText();
        System.out.println("message = " + message);
        String expectedMessage = "translation-not-found[gmiBankBackendApp.tPAccountRegistration.updated]";
        Assert.assertTrue(createOrEditCustomerPage.toastSuccess.isDisplayed());
        //Assert.assertEquals(expectedMessage, message);

    }
}
