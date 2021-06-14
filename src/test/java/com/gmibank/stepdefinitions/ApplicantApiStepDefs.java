package com.gmibank.stepdefinitions;

import com.gmibank.pojos.Applicants;
import com.gmibank.utilities.ConfigurationReader;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.io.IOException;

import static io.restassured.RestAssured.given;

public class ApplicantApiStepDefs {

    Response response;
    Applicants[] applicants;
    String bearerToken = ConfigurationReader.getProperty("api_bearer_token");
    
    

    @Given("user provides api end point to set the response using {string} for applicants")
    public void userProvidesApiEndPointToSetTheResponseUsingForApplicants(String url) {
        response = given().
                headers("Authorization", "Bearer " + bearerToken,
                        "Content-Type", ContentType.JSON,
                        "Accept", ContentType.JSON)
                .when().get(url)
                .then().contentType(ContentType.JSON)
                .extract().response();
    }

    @Given("User gets and manipulates all applicant data")
    public void userGetsAndManipulatesAllApplicantData() throws IOException {
        
        ObjectMapper obj = new ObjectMapper();
        applicants = obj.readValue(response.asString(), Applicants[].class);

        for (int i = 0; i < applicants.length; i++) {

            System.out.println(applicants[i].getId());
            System.out.println(applicants[i].getSsn());
            System.out.println(applicants[i].getFirstName());
            System.out.println(applicants[i].getLastName());
            System.out.println(applicants[i].getAddress());
            System.out.println(applicants[i].getMobilePhoneNumber());
            System.out.println(applicants[i].getUserId());
            System.out.println(applicants[i].getUserName());
            System.out.println(applicants[i].getEmail());
            System.out.println(applicants[i].getCreateDate());
        }
    }

    @And("user saves the applicants in correspondent files")
    public void userSavesTheApplicantsInCorrespondentFiles() {
        
    }

    @Then("user validates the applicants")
    public void userValidatesTheApplicants() {
    }
}
