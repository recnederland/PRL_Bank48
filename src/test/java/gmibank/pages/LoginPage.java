package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{

    @FindBy(id = "username")
    public WebElement userNameTextBox;

    @FindBy(id = "password")
    public WebElement passwordTextBox;

    @FindBy(xpath = "//button[.='Sign in']")
    public WebElement signInButton;

    @FindBy(xpath = "//button[.='Cancel']")
    public WebElement cancelButton;

    @FindBy(linkText = "Did you forget your password?")
    public WebElement forgetPasswordLink;

    @FindBy(linkText = "Register a new account")
    public WebElement registerNewAccountLink;

    @FindBy(xpath = "//div[@class = 'alert alert-danger fade show']")
    public WebElement failedToSignInAlert;


    // Ersan Bey
    @FindBy(id = "account-menu")
    public WebElement loginDropdownIcon ;

    @FindBy(xpath = "(//*[text()='Sign in'])[1]")
    public  WebElement signInButton2 ;

    @FindBy(id = "username")
    public WebElement UserNameBox ;

    @FindBy(id = "password")
    public  WebElement passwordBox ;

    @FindBy(xpath = "//button[@type='submit']//span")
    public WebElement popupPageSignInButton ;

    @FindBy(xpath = "//span[text()='My Operations']")
    public WebElement myOperationsIcon;

    @FindBy(xpath = "//span[text()='Cancel']")
    public WebElement cancelButton2 ;

    @FindBy(xpath = "//div[contains(@class, 'alert alert-danger')]")
    public WebElement loginErrormsg ;

}