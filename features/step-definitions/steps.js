const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect, $, browser } = require('@wdio/globals')
const { Before } = require('@wdio/cucumber-framework')

const LoginPage = require('../pageobjects/login.page')
const dashboardPage = require('../pageobjects/dashboard.page')
const categoryPage = require('../pageobjects/category.page')
const userPage = require('../pageobjects/user.page')
const newCategoryPage = require('../pageobjects/newCategory.page')
const newUserPage = require('../pageobjects/newUser.page')

const pages = {
    login: LoginPage
}

Given(/^user already on the (\w+) page$/, async (page) => {
    await pages[page].open()
    browser.maximizeWindow()
});

When(/^user input email (.+) and password (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^url contain (.+) and showing title kasirAja$/, async (pathName) => {
    const url = browser.getUrl();
    expect(url).toHaveUrlContaining(pathName);
});

When(/^user input invalid email (.+) and invalid password (.+)$/, async (invalidEmail, invalidPassword) => {
    await LoginPage.login(invalidEmail, invalidPassword)
});

Then(/^alert message displayed (.+)$/, async (alertMessage) => {
    const message = await LoginPage.alertMessage();
    expect(message).toHaveTextContaining(alertMessage);
});

Given(/^user already (\w+) to the web$/, async (page) => {
    await pages[page].open()
    browser.maximizeWindow()
    await LoginPage.loginSuccess()
    const header = await $('.chakra-heading.css-1wswht5')
    await browser.waitUntil(async function () {
        return (await header.getText()) === 'kasirAja'
    })
});

Then(/^verify user on the homepage$/, async () => {
    const header = dashboardPage.header()
    expect(header).toHaveTextContaining('kasirAja');
});

When(/^user tap button category$/, async () => {
    dashboardPage.clickbtnCategory()
});

When(/^user tap button add category$/, async () => {
    categoryPage.clickbtnAdd()
});

When(/^user input category name (.+) and category desc (.+)$/, async (category_name, category_desc) => {
    await newCategoryPage.addNewCategory(category_name, category_desc)
});

When(/^user input category desc only (.+)$/, async (category_decs2) => {
    await newCategoryPage.addCategoryOnly(category_decs2)
});

Then(/^user validate category added (.+)$/, async (categorySuccess) => {
    newCategoryPage.success(categorySuccess)
});

Then(/^user validate category failed added (.+)$/, async (categoryAlert) => {
    newCategoryPage.alertEmptyField(categoryAlert)
});

When(/^user tap button user$/, async () => {
    dashboardPage.clickbtnUser()
});

When(/^user tap button add user$/, async () => {
    userPage.clickbtnAdd()
});

When(/^user input user name (.+) user email (.+) and user password (.+)$/, async (user_name, user_email, user_password) => {
    await newUserPage.addNewUser(user_name, user_email, user_password)
});

When(/^user input user email (.+) and user password (.+)$/, async (user_email2, user_password2) => {
    await newUserPage.emailPasswordOnly(user_email2, user_password2)
});

Then(/^user validate user added (.+)$/, async (userSuccess) => {
    newUserPage.alertEmptyField(userSuccess)
});

Then(/^user validate user failed added (.+)$/, async (userAlert) => {
    newUserPage.success(userAlert)
});

Then(/^user logout$/, async () => {
    dashboardPage.clickbtnProfile()
    dashboardPage.clickbtnLogout()
});