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
