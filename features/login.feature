Feature: Login

  Scenario Outline: As a user, I can't log with invalid credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a message saying <message>
  
    Examples:
      | username            | password             | message                        |
      | Walton_Metz         | TbbxbneH6sqX         | Invalid username or password!  |
      | WaltonMetz          | TbbxbneH6sqX1ED@     | Invalid username or password!  |
  
  Scenario Outline: As a user, I can log in

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see my profile
  
    Examples:
      | username            | password             |
      | Walton_Metz         | TbbxbneH6sqX1ED@     |

  Scenario Outline: As a user, I can logout 

    Given I am on the profile page
    When I click logout button
    Then I should see login page

  Scenario Outline: As a new user, I can go to register page

    Given I am on the login page
    When I click New User button
    Then I should see register page

