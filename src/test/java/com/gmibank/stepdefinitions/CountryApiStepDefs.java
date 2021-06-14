package com.gmibank.stepdefinitions;

import com.gmibank.pojos.Country;
import com.gmibank.utilities.ConfigurationReader;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.io.IOException;

import static io.restassured.RestAssured.given;

public class CountryApiStepDefs {
    Response response;
    Country[] country;
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");

    @Given("user provides api end point to set the response using {string} for countries")
    public void userProvidesApiEndPointToSetTheResponseUsingForCountries(String url) {
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
    }

    @Given("User gets and manipulates all country data")
    public void userGetsAndManipulatesAllCountryData() throws IOException {

        ObjectMapper obj = new ObjectMapper();
        country = obj.readValue(response.asString(), Country[].class);

        for (int i = 0; i < country.length; i++) {
            System.out.println(country[i].getName());
            System.out.println(country[i].getId());
        }

    }

    @Given("user sets the response using api end point {string} and creates using {string} and {string}")
    public void userSetsTheResponseUsingApiEndPointAndCreatesUsingAnd(String url, String type, String country) {

        response = given().
                headers("Authorization", "Bearer " + bearerToken,
                        "Content-Type", ContentType.JSON,
                        "Accept", ContentType.JSON)
                .when().body("{\""+type+"\":\""+country+"\"}")
                .post(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
    }

    @Given("user sets the response using api end point {string}")
    public void userSetsTheResponseUsingApiEndPoint(String url) {
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
    }

    @And("user saves the countries in correspondent files")
    public void userSavesTheCountriesInCorrespondentFiles() {
    }

    @Then("user validates the countries")
    public void userValidatesTheCountries() {
    }

    @Given("user deletes a country using endpoint {string} and its extension {string}")
    public void userDeletesACountryUsingEndpointAndItsExtension(String endPoint, String id) {

        response = given().
                headers("Authorization", "Bearer " + bearerToken,
                        "Content-Type", ContentType.JSON,
                        "Accept", ContentType.JSON)
                .when()
                .delete(endPoint+id)
                .then()
                .extract()
                .response();
    }

    @Given("user sees all logs {string}")
    public void userSeesAllLogs(String arg0) {
    }
}
