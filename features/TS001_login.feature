Feature: Login feature

  @feature=login
  Scenario Outline: User login with valid credential

    Given user already on the login page
    When user input email <email> and password <password>
    Then url contain <pathName> and showing title kasirAja

    Examples:
      | email             | password    | pathName  |
      | testing@gmail.com | Bandung5300 | dashboard |


  Scenario Outline: User login with invalid credential

    Given user already on the login page
    When user input invalid email <invalidEmail> and invalid password <invalidPassword>
    Then alert message displayed <alertMessage>
    Examples:
      | invalidEmail    | invalidPassword | alertMessage                       |
      | tess            | 123adsfadf@!    | must be a valid email              |
      | tesss@gmail.com | 123adsfa111     | Kredensial yang Anda berikan salah |
