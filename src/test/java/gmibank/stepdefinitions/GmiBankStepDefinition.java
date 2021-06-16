package gmibank.stepdefinitions;

import gmibank.pages.GmiBankPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class GmiBankStepDefinition {
    GmiBankPage gmiBankPage = new GmiBankPage();

    @Given("user go to {string}")
    public void user_go_to(String homepage) {
        Driver.getDriver().get(homepage);

    }

    @When("user click on the icon")
    public void user_click_on_the_icon() {
        gmiBankPage.iconButton.click();
    }

    @When("user can navigate to login page")
    public void user_can_navigate_to_login_page() {
        gmiBankPage.signInButtonHomePage.click();

    }




}
