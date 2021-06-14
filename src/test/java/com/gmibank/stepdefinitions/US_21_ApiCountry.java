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

public class US_21_ApiCountry {
    Response response;
    Country[] country;
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");
    @Given("user provides api end point to set the response using {string} for countries gmibank")
    public void userProvidesApiEndPointToSetTheResponseUsingForCountriesGmibank(String url) {

        response = given().
                headers("Authorization", "Bearer" + bearerToken,
                "Content-Type", ContentType.JSON, "Accept", ContentType.JSON).
                when().
                get(url).
                then().
                contentType(ContentType.JSON).
                extract().
                response();

    }

    @Given("User gets and manipulates all country data gmibank")
    public void userGetsAndManipulatesAllCountryDataGmibank() throws IOException {
        ObjectMapper obj = new ObjectMapper();
        country = obj.readValue(response.asString(), Country[].class);

        for (int i = 0; i < country.length; i++) {
            System.out.println(country[i].getName());
            System.out.println(country[i].getId());
        }
    }

    @Given("user sets the response using api end point {string} and creates using {string} and {string} gmibank")
    public void userSetsTheResponseUsingApiEndPointAndCreatesUsingAndGmibank(String url, String type, String country) {
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

    @Given("user sets the response using api end point {string} gmibank")
    public void userSetsTheResponseUsingApiEndPointGmibank(String url) {
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

    @And("user saves the countries in correspondent files gmibank")
    public void userSavesTheCountriesInCorrespondentFilesGmibank() {
    }

    @Then("user validates the countries gmibank")
    public void userValidatesTheCountriesGmibank() {
    }

    @Given("user deletes a country using endpoint {string} and its extension {string} gmibank")
    public void userDeletesACountryUsingEndpointAndItsExtensionGmibank(String endPoint, String id) {
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

    @Given("user sees all logs {string} gmibank")
    public void userSeesAllLogsGmibank(String arg0) {
    }
}
