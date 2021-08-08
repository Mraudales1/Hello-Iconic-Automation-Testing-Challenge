Feature: Profile
     Background:
      Given I am logged in
      And I am on profile page
    
    Scenario Outline: As a user, I can log into the secure area

      Given I am on the login page
      When I login with <username> and <password>
      Then I should see a flash message saying <message>
        
    Scenario Outline: As a user, I can log into the secure area
        Given I click delete account botton
        When I click ok boton on delete modal
        Then I should see a message for success delete
        And I should be logged out

    Scenario Outline: As a user, I can delete all books on my account
        Given I click delete books botton
        When I click ok botton on delete modal
        Then I should see a message for success delete

    
