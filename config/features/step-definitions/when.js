const { When } = require('@cucumber/cucumber');

const BookPage = require('../../pages/book/book.page');
const BookstorePage = require('../../pages/bookstore/bookstore.page');
const LoginPage = require('../../pages/login/login.page');
const ProfilePage = require('../../pages/profile/profile.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    book: BookstorePage
}

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I click logout button$/, async () => {
    await ProfilePage.btnLogout.click()
});

When(/^I click New User button$/, async () => {
    await LoginPage.btnNewUser.click()
});

When(/^I search a book by (\w+) with the text (.+)$/, async (type, book) => {
    await browser.pause(3000)
    await BookstorePage.searchBox.setValue(book)
});

When(/^I click on a book$/, async () => {
    await browser.pause(3000)
    await BookstorePage.firstBook.click()
});

When(/^I order books by (.+)$/, async (type) => {
    await browser.pause(3000)
    await BookstorePage.orderBy(type)
});

When(/^I click to add book to collection$/, async () => {
    await browser.pause(3000)
    await BookPage.addBookButton.scrollIntoView();
    await browser.pause(3000)
    await BookPage.addBookButton.click()
});
