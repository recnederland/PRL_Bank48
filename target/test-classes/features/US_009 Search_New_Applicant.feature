Feature: US_009 Search New Applicant Feature
  User Story: Create a new customer,
  User can search for a new applicant by their SSN and see all their registration info populated

  Background: Back story is user is on the login page
    Given User is on the login page

  @search_new_applicant
  Scenario Outline: Search new applicant scenerio
    When User logs in by "<username>" and "<password>"
    And User navigates to Manage Customers Page
    Then User navigates to Create or Edit Customers Page
    Then User searches the "<ssn>"
    Then User should see the info pupolated(i.e.first name)
    Then User signs out

    Examples:
      | username    | password | ssn |
      | manager42  | Manager42- | 123-45-6789 |
      | employee42  | Employee42- | 123-56-7890 |