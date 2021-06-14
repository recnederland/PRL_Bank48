
Feature: CRUD operations for api states
  Background: api end point is set in response
    Given user sets all states to response using api end point "https://www.gmibank.com/api/tp-states"

    @ReadState
    Scenario: test all states
        Given User gets and manipulates all states data
        #And user sets states data in correspondent files
        #Then user validates all state data

    @CreateState
    Scenario Outline: create a state
      Given user sets the response using api end point "https://www.gmibank.com/api/tp-states" and creates states using "<idJson>" and "<nameJson>"

      Examples: create state
        |idJson|nameJson|
        |92256   |Nevazona|
        |92256   |Calizona|
        |92256   |Utazona|
        |92256   |New Arizona|
        |92256   |Texzona|
      #this is country id that we want the states to be created

    @DeleteState
    Scenario Outline: delete states
      Given user deletes a state using endpoint "<endPoint>" and its extension "<id>"

      Examples: multiple states
        |endPoint|id|
        |https://www.gmibank.com/api/tp-states|/91463|
      #this is unique state id

    @UpdateState
    Scenario Outline: update states
      Given user sets the response using api end point "https://www.gmibank.com/api/tp-states" and updates states using "<idJson>" and "<nameJson>"

      Examples: multiple countries
        |idJson|nameJson|
        |91459   |NevaDADAzona|

