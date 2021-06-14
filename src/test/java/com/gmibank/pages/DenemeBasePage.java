package com.gmibank.pages;

import com.gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class DenemeBasePage {

    public DenemeBasePage(){
        PageFactory.initElements(Driver.getDriver(),this);}

        // sign in
        @FindBy(xpath ="//a[@aria-haspopup='true']")
        public WebElement firstelement;

        @FindBy(xpath = "//span[.='Sign in']")
        public WebElement signIn;

        @FindBy(xpath = "//input[@name='username']")
        public WebElement usernameLine;

        @FindBy(xpath = "//input[@name='password']")
        public WebElement passwordLine;

        @FindBy(xpath = "//button[.='Sign in']")
        public WebElement signInOnayButton;

        @FindBy(xpath = "//span[text()='Cancel']")
        public WebElement signInCancel;

        // register part
        @FindBy(xpath = "//span[text()='Register']")
        public WebElement registereGider;

        @FindBy(id = "ssn")
        public WebElement ssn;

        @FindBy(id = "firstname")
        public WebElement firstName;

        @FindBy(id = "lastname")
        public WebElement lastName;

        @FindBy(id = "address")
        public WebElement adress;

        @FindBy(id = "mobilephone")
        public WebElement mobileNummer;

        @FindBy(id = "username")
        public WebElement userName;

        @FindBy(id = "email")
        public WebElement email;

        @FindBy(id = "firstPassword")
        public WebElement firstPassword;

        @FindBy(id = "strengthBar")
        public WebElement strengthBar;

        @FindBy(id = "secondPassword")
        public WebElement secondPassword;

        @FindBy(id = "register-submit")
        public WebElement registerAccept;

        @FindBy(xpath = "//div[@role='alert']")
        public List<WebElement> successMessage;

        @FindBy(xpath = "//*[contains(text(),'Registration saved!')]")
        public WebElement successMessage2;

//      @FindBy(className = "//div[@className='invalid-feedback']")
//      public WebElement errormessage;

        @FindBy( xpath = "//div[@class='Toastify__toast-body']")
        public WebElement erroAllert;

        // My Operation
        @FindBy(xpath = "//span[text()='My Operations']")
        public WebElement myOperation;

        @FindBy(xpath = "//a[text()='My Accounts']")
        public WebElement myAccounts;

        @FindBy(xpath = "//a[text()='Transfer Money']")
        public WebElement transferMoney;

        @FindBy(xpath = "(//button[text()='View Transaction'])[1]")
        public WebElement viewTransaction1;

        @FindBy(xpath = "(//button[text()='View Transaction'])[2]")
        public WebElement viewTransaction2;

        // Transfer Money
        @FindBy(id = "fromAccountId")
        public WebElement fromAccountId;

        @FindBy(id = "toAccountId")
        public WebElement toAccountId;

        @FindBy(xpath = "//tr[1]//td[3]")
        public WebElement firstAcountValue;

        @FindBy(xpath = "//tr[2]//td[3]")
        public WebElement secondAcountValue;

        @FindBy(xpath = "//tbody//tr//td[3]")
        public WebElement accountBalanceList;

        @FindBy(id = "balance")
        public WebElement balance;

        @FindBy(id = "balancecent")
        public WebElement balancecent;

        @FindBy(id = "description")
        public WebElement description;

        @FindBy(id = "make-transfer")
        public WebElement makeTransfer;

        @FindBy(xpath = "//div[@class='Toastify__toast-body' or text()='Transfer is succesfull']")
        public WebElement succesMesage;

        @FindBy(xpath = "//div[@class='Toastify__toast-body']")
        public WebElement errorMesageTransfer;


}


