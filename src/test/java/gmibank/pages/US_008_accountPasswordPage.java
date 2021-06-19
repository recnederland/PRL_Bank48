package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_008_accountPasswordPage {

    public US_008_accountPasswordPage(){ PageFactory.initElements(Driver.getDriver(), this);}

    @FindBy(xpath = "//a[span = \"Password\"]")
    public WebElement passwordOnTheIcon;

    @FindBy(css = "#currentPassword")
    public WebElement currentPassword;

    @FindBy(css = "#newPassword")
    public WebElement newPassword;

    @FindBy(className = "//li[@class=\"point\"]")
    public WebElement strengthBar;

    @FindBy(css = "#confirmPassword")
    public WebElement confirmPassword;

    @FindBy(xpath = "(//div[@class = \"invalid-feedback\"])[1]")
    public WebElement invalidFeedbackCurrentPassword;

    @FindBy(xpath = "(//div[@class = \"invalid-feedback\"])[2]")
    public WebElement invalidFeedbackNewPassword;

    @FindBy(xpath = "(//div[@class = \"invalid-feedback\"])[3]")
    public WebElement invalidFeedbackPasswordConfirmation;

    @FindBy(xpath = "(//li[@style=\"background-color: rgb(255, 0, 0);\"])[1]")
    public WebElement passwordStrengthBar0;

    @FindBy(xpath = "(//li[@style=\"background-color: rgb(221, 221, 221);\"])[1]")
    public WebElement passwordStrengthBar1;

    @FindBy(xpath = "(//li[@style=\"background-color: rgb(255, 153, 0);\"])")
    public WebElement passwordStrengthBar2;

    @FindBy(xpath = "((//li[@style=\"background-color: rgb(153, 255, 0);\"])")
    public WebElement passwordStrengthBar3;

    @FindBy(xpath = "(//li[@style=\"background-color: rgb(255, 0, 0);\"])")
    public WebElement passwordStrengthBar4;

    @FindBy(xpath = "(//li[@style=\"background-color: rgb(0, 255, 255);\"])")
    public WebElement passwordStrengthBar5;




}
