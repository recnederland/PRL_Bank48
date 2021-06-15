package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage() {

        PageFactory.initElements(Driver.getDriver(), this);

    }
    @FindBy(id = "account-menu")
    public WebElement loginDropdownIcon ;

    @FindBy(xpath = "(//*[text()='Sign in'])[1]")
    public  WebElement signInButton ;

    @FindBy(id = "username")
    public WebElement UserNameBox ;

    @FindBy(id = "password")
    public  WebElement passwordBox ;

    @FindBy(xpath = "//button[@type='submit']//span")
    public WebElement popupPageSignInButton ;

    @FindBy(xpath = "//span[text()='My Operations']")
    public WebElement myOperationsIcon;

    @FindBy(xpath = "//span[text()='Cancel']")
    public WebElement cancelButton ;




}
