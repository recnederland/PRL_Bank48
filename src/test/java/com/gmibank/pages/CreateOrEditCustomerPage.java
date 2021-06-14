package com.gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CreateOrEditCustomerPage extends BasePage {

    @FindBy(id = "search-ssn")
    public WebElement searchSsnTextBox;

    @FindBy(xpath = "//*[text()='Search']")
    public WebElement searchButton;

    //@FindBy(xpath = "//*[contains(text(), 'translation-not-foun')]")
    //public WebElement toastContainer;
    //@FindBy(xpath = "//div[@class='Toastify__toast-body']")
    //public WebElement successPopup;
    //@FindBy(xpath = "//div[@class='Toastify__toast Toastify__toast--success toastify-toast']")
    @FindBy(css = "div[class='Toastify__toast Toastify__toast--success toastify-toast']")
    public WebElement toastSuccess;

    @FindBy(id = "tp-customer-firstName")
    public WebElement customerFirstNameTextBox;
}
