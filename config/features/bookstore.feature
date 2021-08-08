Feature: BookStore

  Scenario Outline: As a user, I search a book by name

    Given I am on the bookstore page
    When I search a book by <type> with the text <search>
    Then I should see the book im looking for
    
    Examples:
      | type                | search                      | 
      | Name                | Git Pocket Guide            |
      | Author              | Richard E. Silverman        |
  
  Scenario Outline: As a user, I search a book by name

    Given I am on the bookstore page
    When I click on a book 
    Then I should see all information about that book

  Scenario Outline: As a user, I search a book by name

    Given I am on the bookstore page
    When I order books by <type>
    Then I should see all books ordered by <type> with first book being <book>

    Examples:
      | type                | book                        | 
      | Title               | Git Pocket Guide            |
      | Author              | Learning JavaScript Design  |
