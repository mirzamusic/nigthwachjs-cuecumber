@smoke
Feature: PhpTravels Smoke Test

Scenario: Login
  When I open PhpTravels admin and log in with invalid data
  When I open PhpTravels admin and log in  
  Then I should be redirected to dashboard page