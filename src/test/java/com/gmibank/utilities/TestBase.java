package com.gmibank.utilities;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;
import org.junit.Before;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class TestBase {

    protected RequestSpecification spec01;
    protected RequestSpecification spec02;
    protected RequestSpecification spec03;

    protected Map<String, String> gmibankCustomerMap;
    protected Map<String, String> gmibankCountryMap;
    protected Map<String, String> gmibankStateMap;
    protected Map<String, String> gmibankUserMap;
    protected Map<String, String> gmibankAccountMap;
    protected Map<String, Object> gmiRequestBodyMap;

    protected JSONObject gmiJsonbankCustomerBody;
    protected JSONObject gmiJsonbankCountryBody;
    protected JSONObject gmiJsonbankStateBody;
    protected JSONObject gmiJsonbankUserBody;
    protected JSONObject gmiJsonbankAccountBody;
    protected JSONObject gmiJsonRequestBody;

    @Before
    public void setUp01() {
        spec01 = new RequestSpecBuilder().
                setBaseUri("https://gmibank-qa-environment.com/").  // uri olusturduk
                build();                                            // spec01 icerisine depoladik
        // Boylece kod tekrarini nledik guncellemeleri daha hizli yapabilecegiz
    }

    @Before
    public void setUp02() {
        spec02 = new RequestSpecBuilder().
                setBaseUri("https://www.gmibank.com/api/tp-countries").
                build();
    }

    @Before
    public void setUp03() {
        spec03 = new RequestSpecBuilder().
                setBaseUri("https://jsonplaceholder.typicode.com/todos").
                build();
    }

    protected Response createRequestBodyByJsonObjectClass() {

//        JSONObject jsonBookingDatesBody;     POST request 2a icin bu satiri kullandik
//        JSONObject jsonRequestBody;

        gmiJsonbankCountryBody = new JSONObject();
        gmiJsonbankCountryBody.put("name", "USA");
        gmiJsonbankCountryBody.put("states", "null");

        gmiJsonbankCustomerBody = new JSONObject();
        gmiJsonbankCustomerBody.put("firstname", "Maria");
        gmiJsonbankCustomerBody.put("lastname", "Maria");
        gmiJsonbankCustomerBody.put("middleInitial", "M");
        gmiJsonbankCustomerBody.put("email", "customer55@gmail.com");
        gmiJsonbankCustomerBody.put("mobilePhoneNumber", "123-456-7890");
        gmiJsonbankCustomerBody.put("phoneNumber", "123-456-7890");
        gmiJsonbankCustomerBody.put("zipCode", "0300");
        gmiJsonbankCustomerBody.put("address", "free world street");
        gmiJsonbankCustomerBody.put("city", "Sacramento");
        gmiJsonbankCustomerBody.put("ssn", "027-31-2727");
        gmiJsonbankCustomerBody.put("createDate", "027-02-21T21:00:00Z");
        gmiJsonbankCustomerBody.put("zelleEnrolled", "false");
        gmiJsonbankCustomerBody.put("country", gmiJsonbankCountryBody);
        gmiJsonbankCustomerBody.put("state", gmiJsonbankStateBody);
        gmiJsonbankCustomerBody.put("user", gmiJsonbankUserBody);
        gmiJsonbankCustomerBody.put("account", gmiJsonbankAccountBody);

        gmiJsonbankStateBody = new JSONObject();
        gmiJsonbankStateBody.put("state", "California");

        gmiJsonbankUserBody = new JSONObject();
        gmiJsonbankUserBody.put("login", "customer55");
        gmiJsonbankUserBody.put("firstname", "Maria");
        gmiJsonbankUserBody.put("lastname", "Maria");
        gmiJsonbankUserBody.put("email", "customer55@gmail.com");
        gmiJsonbankUserBody.put("activated", "true");
        gmiJsonbankUserBody.put("langKey", "en");
        gmiJsonbankUserBody.put("imageUrl", "null");
        gmiJsonbankUserBody.put("resetDate", "null");

        gmiJsonbankAccountBody = new JSONObject();
        gmiJsonbankAccountBody.put("account", "null");

        gmiJsonRequestBody = new JSONObject();
        gmiJsonRequestBody.put("firstname", "Kemal");
        gmiJsonRequestBody.put("lastname", "Can");
        gmiJsonRequestBody.put("totalprice", 888);
        gmiJsonRequestBody.put("depositpaid", false);
        gmiJsonRequestBody.put("bookingdates", gmiJsonbankCountryBody);//bookingdates'in value'su bir Json
        gmiJsonRequestBody.put("additionalneeds", "Wifi");

        Response response = given().
                contentType(ContentType.JSON).
                spec(spec01).
                auth().
                basic("admin", "password123").
                body(gmiJsonRequestBody.toString()).
                when().
                post("/booking");

        return response;
    }

    protected Response createRequestBodyByMap() {

        gmibankCountryMap = new HashMap<>();
        gmibankCountryMap.put("checkin", "2020-05-02");
        gmibankCountryMap.put("checkout", "2020-05-05");

        gmibankCustomerMap = new HashMap<>();
        gmibankCustomerMap.put("firstname", "Maria");
        gmibankCustomerMap.put("lastname", "Maria");
        gmibankCustomerMap.put("middleInitial", "M");
        gmibankCustomerMap.put("email", "customer55@gmail.com");
        gmibankCustomerMap.put("mobilePhoneNumber", "123-456-7890");
        gmibankCustomerMap.put("phoneNumber", "123-456-7890");
        gmibankCustomerMap.put("zipCode", "0300");
        gmibankCustomerMap.put("address", "free world street");
        gmibankCustomerMap.put("city", "Sacramento");
        gmibankCustomerMap.put("ssn", "027-31-2727");
        gmibankCustomerMap.put("createDate", "027-02-21T21:00:00Z");
        gmibankCustomerMap.put("zelleEnrolled", "false");
        gmibankCustomerMap.put("country", "gmibankCountryMap");
        gmibankCustomerMap.put("state", "gmibankStateMap");
        gmibankCustomerMap.put("user", "gmibankUserMap");
        gmibankCustomerMap.put("account", "gmibankAccountMap");

        gmibankStateMap = new HashMap<>();
        gmibankStateMap.put("state", "California");

        gmibankUserMap = new HashMap<>();
        gmibankUserMap.put("login", "customer55");
        gmibankUserMap.put("firstname", "Maria");
        gmibankUserMap.put("lastname", "Maria");
        gmibankUserMap.put("email", "customer55@gmail.com");
        gmibankUserMap.put("activated", "true");
        gmibankUserMap.put("langKey", "en");
        gmibankUserMap.put("imageUrl", "null");
        gmibankUserMap.put("resetDate", "null");

        gmibankAccountMap = new HashMap<>();
        gmibankAccountMap.put("account", "null");


        gmiRequestBodyMap = new HashMap<>();
        gmiRequestBodyMap.put("firstname", "Ahmet");
        gmiRequestBodyMap.put("lastname", "Yildiz");
        gmiRequestBodyMap.put("totalprice", 123);
        gmiRequestBodyMap.put("depositpaid", true);
        gmiRequestBodyMap.put("bookingdates", gmibankCountryMap);
        gmiRequestBodyMap.put("additionalneeds", "Wifi");

        Response response = given().
                contentType(ContentType.JSON). // or "application/json"
                spec(spec01).
                auth().
                basic("admin","password123").
                body(gmiRequestBodyMap).
                when().
                post("/booking");

        return response;
    }
}
