package com.gmibank.stepdefinitions;

import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class US_25_CountryEachCreate {
    Response response;
    String createdCountryName;
    String createdCountryState;

    @Given("System should allow to create new countries using api end point {string} {string} {string}")
    public void usSystemShouldAllowToCreateNewCountriesUsingApiEndPoint(String gmi, String name, String state) {

        Driver.getDriver().get(gmi);
        Map<String, Object> postCountry = new HashMap<>();
        //postCountry.put("id",id);
        postCountry.put("name",name);
       postCountry.put("state",state);

        response = given().
                headers("Authorization", "Bearer " +  ConfigurationReader.getProperty("api_bearer_token"),
                        "Content-Type", ContentType.JSON,
                        "Accept", ContentType.JSON).when().body(postCountry).post(gmi).then().
                contentType(ContentType.JSON).extract().response();
        response.prettyPrint();
        JsonPath jsonPath = response.jsonPath();
        createdCountryName = jsonPath.getString("name");
        createdCountryState = jsonPath.getString("state");
        System.out.println(createdCountryName);
    }

    @Then("validate created country")
    public void validateCreatedCountry() {

        response =  given().
                headers("Authorization", "Bearer " +   ConfigurationReader.getProperty("api_bearer_token"),
                        "Content-Type",ContentType.JSON,
                        "Accept", ContentType.JSON).when().post("https://www.gmibank.com/api/tp-countries").
                            then().contentType(ContentType.JSON).extract().response();

        JsonPath jsonPath = response.jsonPath();
        String newName = jsonPath.getString("name");
        Assert.assertFalse("not match",newName.contains(createdCountryName));
        System.out.println("Validation is succesfull");
    }

}
