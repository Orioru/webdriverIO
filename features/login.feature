Feature: Login Scenarios

  @Test1
  Scenario Outline: As a user, I can log into the saucelabs site correctly
    Given I am on the "login" page
    When I login with "<username>" and "<password>"
    Then I should see the saucelabs products page

    Examples:
      | username      |      password          |
      | standard_user |      secret_sauce      | 
      | visual_user   |      secret_sauce      |

  @Test2
  Scenario: As a wrong user, I can't log into the saucelabs site
    Given I am on the "login" page
    When I login with "wrong_user" and "error"
    Then I should see the error login message

  @Test3
  Scenario: As a user, I can logout from the saucelabs site
    Given I am on the "login" page
    When I login with "standard_user" and "secret_sauce"
    Then I should see the saucelabs products page
    When I press on the menu icon
    Then I check the side menu appears
    When I press on logout
    Then I check I am on the login page
