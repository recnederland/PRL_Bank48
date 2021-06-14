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

}
