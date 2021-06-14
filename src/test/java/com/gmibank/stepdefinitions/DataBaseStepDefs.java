package com.gmibank.stepdefinitions;

import com.gmibank.utilities.DatabaseUtility;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

import static com.gmibank.utilities.DatabaseUtility.createConnection;
import static com.gmibank.utilities.DatabaseUtility.getColumnData;

public class DataBaseStepDefs {

    public static void main(String[] args) {
        createConnection();
        String query = "Select * from tp_customer";
        /*List<String> sutunIsimleri = DatabaseUtility.getColumnNames(query);
        System.out.println("sutunIsimleri = " + sutunIsimleri);*/
        System.out.println(DatabaseUtility.getColumnNames(query));
        System.out.println(DatabaseUtility.getColumnData(query, "last_name"));
        System.out.println(DatabaseUtility.getCellValue(query, 1, 10));
        System.out.println(DatabaseUtility.getCellValue(query, 5,10));
    }

    List<Object> customerSsns;
    
    @Given("ders user creates a connection with db using {string} , {string} and {string}")
    public void dersUserCreatesAConnectionWithDbUsingAnd(String url, String user, String password) {
        createConnection(url, user, password);
    }

    @And("ders user reads the Customers data using {string} and {string}")
    public void dersUserReadsTheCustomersDataUsingAnd(String query, String ssn) {
        customerSsns = getColumnData(query,ssn);
        System.out.println("customerSsns = " + customerSsns);
        System.out.println(customerSsns.size());

    }

    @Then("ders validate customers data")
    public void dersValidateCustomersData() {
        String filePath = "src/test/resources/testdata/CustomerSsnInfo.txt";
        List<String> expectedSsns = new ArrayList<>();
        expectedSsns.add("476-90-9374");
        expectedSsns.add("473-22-1798");
        //expectedSsns.add("589-25-1478");
        //List<String> actualSsns = ReadTxt.returnCustomerSNNList(filePath);
        Assert.assertTrue(customerSsns.containsAll(expectedSsns));
        System.out.println("Validation successfull");
    }
}
