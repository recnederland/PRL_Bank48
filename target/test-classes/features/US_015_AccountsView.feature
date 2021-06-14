@showAccount
<<<<<<< HEAD
Feature: US015 Show Account
  Scenario: User does every step to transfer money between user's accounts
    Given User is on the login page
    When User provide a valid username
    Then User provide a valid password
    And User click on the sign in button
    And User navigates My Accounts Page
    Then User gets the info about Users accounts balance
=======
Feature: Kullanici kendi hesaplarini gorebilir
  Background: Kullanici login sayfasina gidebilir
  Scenario: Kullanici tum hesap tiplerini ve bakiyelerini  gorebilir
    Given Customer "http://www.gmibank.com/login" banka adresine gider
    And Customer username "<username>" girer
    And Customer password "<password>" girer
    And Customer sign in buttonuna tiklar
    And Customer My Operations acilir menusunde My Accounts a tiklar
    And Customer sayfadaki Account Type webelementi bulur ve dogrular
    Then Customer sayfadaki Balance webelementi bulur ve dogrular
>>>>>>> main
