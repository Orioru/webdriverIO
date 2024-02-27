Feature: Cart Scenarios

Background: 
    Given I am on the "login" page
    When I login with "standard_user" and "secret_sauce"
    Then I should see the saucelabs products page

    @Test4
    Scenario: As a user, I can add a product to the cart
    When I press on the "1" product on the products page
    And I press on Add to cart button
    Then I check the cart has "1" item added

    @Test5
    Scenario: As a user, I can add a product to the cart and remove it
    Then I check the cart has "1" item added
    When I press on the "1" product on the products page
    When I press on remove button
    Then I check the cart has no items