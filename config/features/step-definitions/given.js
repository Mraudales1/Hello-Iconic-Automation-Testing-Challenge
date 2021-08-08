const { Given, When } = require('@cucumber/cucumber');

const LoginPage = require('../../pages/login/login.page');
const ProfilePage = require('../../pages/profile/profile.page');
const BookstorePage = require('../../pages/bookstore/bookstore.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    bookstore: BookstorePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


Given(/^I am logged on (\w+) page with (\w+) and (.*)$/, async (page, username, password) => {
    await LoginPage.open()
    await LoginPage.login(username, password)
    await browser.pause(3000)
    await await pages[page].open()
});