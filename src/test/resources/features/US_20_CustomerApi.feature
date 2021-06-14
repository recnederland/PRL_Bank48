@CustomerApi
  Feature: Customer Api validation
    Background: api end point is set in response
      Given user provides api end point to set the response using "https://www.gmibank.com/api/tp-customers?size=1500"

    #@customerDataTest
      Scenario: validate all customers' data
        Given manipulate all customers' data
        And user sets the data in correspondent files
        Then user validates all data
