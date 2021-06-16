package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GmiBankPage {

    public GmiBankPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "account-menu")
    public WebElement iconButton;

    @FindBy(xpath = "(//*[text()='Sign in'])[1]")
    public WebElement signInButtonHomePage;


}
