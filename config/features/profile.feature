Feature: Profile
   
    Scenario Outline: As a user, I can log into the secure area

      Given I am logged on profile page with <username> and <password>
      When I click on Delete Account
      Then I should see a dialog for Delete Account

      Examples:
      | username            | password             |
      | Walton_Metz         | TbbxbneH6sqX1ED@     |
        
    Scenario Outline: As a user, I can log into the secure area

      Given I am on the profile page
      When I click on Delete All Books
      Then I should see a dialog for Delete All Books

    Scenario Outline: As a user, I can log into the secure area

      Given I am on the profile page
      When I click on Delete Book
      Then I should see a dialog for Delete Book

    Scenario Outline: As a user, I search a book by name

      Given I am on the profile page
      When I search a book by <type> with the text <search>
      Then I should see the book im looking for on my profile
    
      Examples:
        | type                | search                                         | 
        | Name                | Learning JavaScript Design Patterns            |
        | Author              | Addy Osmani                                    |
    
