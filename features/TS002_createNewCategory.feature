Feature: Add New Category

  @feature=Category      
  Scenario Outline: User successfully add new category
    Given user already login to the web
    Then verify user on the homepage
    When user tap button category
    When user tap button add category
    When user input category name <name>
    When user input category desc <description>
    When user tap save

    Examples:
      | name             | description                                              |
      | Electronics      | holaaaa                                                  |