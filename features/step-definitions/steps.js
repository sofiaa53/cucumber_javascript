const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page')
const categoryPage = require('../pageobjects/category.page')
const newCategoryPage = require('../pageobjects/newCategory.page')

const pages = {
    login: LoginPage
}

Given(/^user already on the (\w+) page$/, async (page) => {
    await pages[page].open()
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
    await LoginPage.loginSuccess()
});
 
Then(/^verify user on the homepage$/, async () => {
    const url = browser.getUrl();
    //expect(url).toHaveUrlContaining('kasirAja');
});
 
When (/^user tap button category$/, async () => {
    dashboardPage.btnCategory()
});
 
When (/^user tap button add category$/, async () => {
    categoryPage.btnAdd()
});
 
When (/^user input category name (\w+)$/, async (name) => {
    newCategoryPage.nama(name)
});
 
When (/^user input category desc (\w+)$/, async (description) => {
    newCategoryPage.deskripsi(description)
});
 
When (/^user tap save$/, async () => {
    newCategoryPage.btnSave()
});
 
Then (/^user validate success message(\w+)$/, async (message) => {
    newCategoryPage.alertEmptyField(message)
});
