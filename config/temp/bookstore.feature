Feature: BookStore

  Scenario Outline: As a user, I search a book by name

    Given I am on the bookstore page
    When I search a <book by name> on the search bar
    Then I should see the book im looking for
    
  Scenario Outline: As a user, I search a book by author

    Given I am on the bookstore page
    When I search a book by author on the search bar
    Then I should see the book im looking for
  
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>