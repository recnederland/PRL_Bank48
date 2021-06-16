package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class loginPage {

    public loginPage(){PageFactory.initElements(Driver.getDriver(),this);}

    @FindBy(xpath = "//*[@name = \"username\"]")
    public WebElement userName;

    @FindBy(xpath = "//*[@name = \"password\"]")
    public WebElement password;

    @FindBy(xpath = "//*[@type= \"submit\"]")
    public WebElement submit;



}
