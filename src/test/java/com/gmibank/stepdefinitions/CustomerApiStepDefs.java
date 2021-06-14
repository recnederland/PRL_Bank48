package com.gmibank.stepdefinitions;

import com.gmibank.pojos.Customer;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.ReadTxt;
import com.gmibank.utilities.WriteToTxt;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.given;

public class CustomerApiStepDefs {

    Response response;
    Customer[] customer;
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");
    String fileName = "src/test/resources/testdata/CustomerApiInfo.txt";

    @Given("user provides api end point to set the response using {string}")
    public void userProvidesApiEndPointToSetTheResponseUsing(String url) {


        response = given().
                headers("Authorization", "Bearer " + bearerToken,
                        "Content-Type", ContentType.JSON,
                        "Accept", ContentType.JSON)
                .when()
                .get(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();

        //response.prettyPrint();

    }

    @Given("manipulate all customers' data")
    public void manipulateAllCustomersData() throws Exception {

        ObjectMapper obj = new ObjectMapper();

        customer = obj.readValue(response.asString(), Customer[].class);

        //System.out.println(customer[0].getFirstName());
        //System.out.println(customer[3].getUser().getEmail());

        for (int i=0; i<customer.length; i++){
            if (customer[i].getUser() != null){
                //System.out.println(customer[i].getUser().getFirstName());
            }
        }
    }

    @And("user sets the data in correspondent files")
    public void userSetsTheDataInCorrespondentFiles() {

        WriteToTxt.saveAllCustomerData(fileName, customer);
    }

    @Then("user validates all data")
    public void userValidatesAllData() {

        //List<String> expectedCustomerSSNs = new ArrayList<>();
        //expectedCustomerSSNs.add("231-89-4203");
        //expectedCustomerSSNs.add("222-33-5555");
        //expectedCustomerSSNs.add("458-62-6584");
                //do it in UI

        //System.out.println(ReadTxt.returnCustomerSNNListWithCustomer(fileName));

        //Assert.assertTrue("They do not match with our records", ReadTxt.returnCustomerSNNListWithCustomer(fileName).containsAll(expectedCustomerSSNs));



        //String expectedCustomer = "Ali, Sahin, alisahin@gmail.com, 231-89-4203";

        //Assert.assertTrue("They do not match with our records", ReadTxt.returnCustomer2(fileName).contains(expectedCustomer));

        List<Customer> expectedCustomer = new ArrayList<>();
        Customer customer1 = new Customer();
        customer1.setFirstName("Jon");
        customer1.setLastName("Snow");
        customer1.setEmail("jon.snow@example.com");
        customer1.setSsn("476-90-9374");
        customer1.setId(36531);
        expectedCustomer.add(customer1);
        Assert.assertTrue("They do not match with our records", ReadTxt.returnCustomer2(fileName).contains(expectedCustomer));

    }
}
