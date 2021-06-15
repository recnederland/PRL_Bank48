@showAccount
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
