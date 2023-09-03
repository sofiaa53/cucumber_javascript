Feature: Add New Category

  @feature=Category

  Scenario Outline: User successfully add new category
    Given user already login to the web
    Then verify user on the homepage
    When user tap button category
    When user tap button add category
    When user input category name <category_name> and category desc <category_desc>
    Then user validate category added <categorySuccess>

    Examples:
      | category_name | category_desc | categorySuccess |
      | Electronics   | test          | success         |

  Scenario Outline: User failed add new category
    #Given user already login to the web
    #Then verify user on the homepage
    #When user tap button category
    When user tap button add category
    When user input category desc only <category_desc2>
    Then user validate category failed added <categoryAlert>

    Examples:
      | category_desc2 | categoryAlert                     |
      | test           | "name" is not allowed to be empty |

