package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class userInfoPage {

    public userInfoPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath ="//li[@id='account-menu']")
    public WebElement lDropdown;

    @FindBy(xpath = "//*[contains(text(), \"Info\")]")
    public WebElement userInfo;

    @FindBy(xpath = "//input[@name =\"firstName\"]")
    public WebElement firstName;

    @FindBy(xpath = "//input[@name=\"lastName\"]")
    public WebElement lastName;

    @FindBy(xpath = "//input[@name=\"email\"]")
    public WebElement email;

    @FindBy(name="langKey")
    public WebElement languages;

    @FindBy(css = ".invalid-feedback")
    public WebElement warningMessage;

//    @FindBy(xpath = "//*[@class = \"invalid-feedback\"]")
//    public WebElement invalidFeedback;

//    @FindBy(xpath = "//*[@class = \"is-touched is-dirty av-valid form-control\"]")
//    public WebElement validFeedback;


}
