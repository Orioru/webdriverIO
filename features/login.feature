Feature: Login Scenarios

  @Test1
  Scenario Outline: As a user, I can log into the saucelabs site correctly
    Given I am on the "login" page
    When I login with "<username>" and "<password>"
    Then I should see the saucelabs homepage

    Examples:
      | username      |      password          |
      | standard_user |      secret_sauce      | 
      | visual_user   |      secret_sauce      |
