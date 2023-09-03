Feature: Add New User

    @feature=User
    Scenario Outline: User successfully add new user
        Given user already login to the web
        Then verify user on the homepage
        When user tap button user
        When user tap button add user
        When user input user name <user_name> user email <user_email> and user password <user_password>
        Then user validate user added <userSuccess>

        Examples:
            | user_name | user_email         | user_password | successMessage |
            | Sofia     | usermail@gmail.com | test123       | success        |

    Scenario Outline: User failed add new user
        #Given user already login to the web
        #Then verify user on the homepage
        #When user tap button user
        When user tap button add user
        When user input user email <user_email2> and user password <user_password2>
        Then user validate user failed added <userAlert>

        Examples:
            | user_email2        | user_password2 | userAlert                         |
            | usermail@gmail.com | test123        | "name" is not allowed to be empty |