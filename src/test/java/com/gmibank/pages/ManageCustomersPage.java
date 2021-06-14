package com.gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ManageCustomersPage extends BasePage {

    @FindBy(xpath = "//*[text()='Create a new Customer']")
    public WebElement createNewCustomerButton;

}
