package gmibank.stepdefinitions;

import gmibank.pages.userInfoPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class userInfoStepDef {



    userInfoPage uinfo = new userInfoPage();


    @When("the user click on the user name")
    public void the_user_click_on_the_user_name() {

        uinfo.userNameTopRightCorner.click();
    }

    @When("User Info options should be visible")
    public void user_Info_options_should_be_visible() {


         
        Driver.getDriver().manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        String uinfoText = uinfo.userInfo.getText();
        System.out.println("uinfoText = " + uinfoText);

    }

    @Then("the user click on the User Info")
    public void the_user_click_on_the_User_Info() {
        uinfo.userInfo.click();
    }

    @Then("the user navigate to User Settings page")
    public void the_user_navigate_to_User_Settings_page() {

        String expectedUrl = "https://gmibank-qa-environment.com/";
        String actualUrl = Driver.getDriver().getCurrentUrl();

        System.out.println("actualUrl = " + actualUrl);
        System.out.println("expectedUrl = " + expectedUrl);


    }



}