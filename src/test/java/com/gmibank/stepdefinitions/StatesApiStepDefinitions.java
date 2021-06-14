package com.gmibank.stepdefinitions;

import com.gmibank.pojos.States;
import com.gmibank.utilities.ConfigurationReader;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.io.IOException;

import static io.restassured.RestAssured.given;

public class StatesApiStepDefinitions {

    Response response;
    States[] state;
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");

    @Given("user sets all states to response using api end point {string}")
    public void userSetsAllStatesToResponseUsingApiEndPoint(String url) {

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

        //response.prettyPeek();
    }

    @Given("User gets and manipulates all states data")
    public void userGetsAndManipulatesAllStatesData() throws IOException {
        ObjectMapper obj = new ObjectMapper();
        state = obj.readValue(response.asString(), States[].class);

        for (int i=0; i<state.length; i++){
            if (state[i].getName() != null){
                System.out.println(state[i].getName() + " " + state[i].getId());
            }
        }
    }

    @Given("user sets the response using api end point {string} and creates states using {string} and {string}")
    public void userSetsTheResponseUsingApiEndPointAndCreatesStatesUsingAnd(String url, String id, String name) {

        response = given().
                headers("Authorization", "Bearer " + bearerToken,
                        "Content-Type", ContentType.JSON,
                        "Accept", ContentType.JSON)
                .when().body("{\"countryId\": "+id+",\"name\": \""+name+"\"}")
                .post(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
    }

    @Given("user deletes a state using endpoint {string} and its extension {string}")
    public void userDeletesAStateUsingEndpointAndItsExtension(String endPoint, String id) {
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

    @Given("user sets the response using api end point {string} and updates states using {string} and {string}")
    public void userSetsTheResponseUsingApiEndPointAndUpdatesStatesUsingAnd(String endPoint, String id, String name) {

        response = given().
                headers("Authorization", "Bearer " + bearerToken,
                        "Content-Type", ContentType.JSON,
                        "Accept", ContentType.JSON)
                .when().body("{\"id\": "+id+",\"name\": \""+name+"\"}")
                .put(endPoint)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
    }
}
