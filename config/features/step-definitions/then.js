const { Then } = require('@cucumber/cucumber');

const LoginPage = require('../../pages/login/login.page');
const ProfilePage = require('../../pages/profile/profile.page');
const BookstorePage = require('../../pages/bookstore/bookstore.page');

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    book: BookstorePage
}

Then(/^I should see a message saying (.*)$/, async (message) => {
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveTextContaining(message);
});

Then(/^I should see my profile$/, async () => {
    await browser.pause(3000)
    await expect(await browser.getUrl()).toContain('https://demoqa.com/profile');
});

Then(/^I should see login page$/, async () => {
    await expect(await browser.getUrl()).toContain('https://demoqa.com/login');
});

Then(/^I should see register page$/, async () => {
    await expect(await browser.getUrl()).toContain('https://demoqa.com/register');
});

Then(/^I should see the book im looking for$/, async () => {
    await expect(await BookstorePage.firstBook.getText()).toContain('Git Pocket Guide');
});

Then(/^I should see all information about that book$/, async () => {
    await expect(browser).toHaveUrlContaining('https://demoqa.com/books?book=');
});

Then(/^I should see all books ordered by (\w+) with first book being (.+)$/, async (type, book) => {
    await expect(await BookstorePage.firstBook.getText()).toContain(book);
});

Then(/^I should see an alert$/, async () => {
    await browser.pause(4000)
    await expect(await browser.isAlertOpen()).toBeTruthy()
});

Then(/^I should see a dialog for (.*)$/, async (title) => {
    await browser.pause(2000)
    await expect(await ProfilePage.deleteDialogTitle.getText()).toContain(title)
});

Then(/^I should see the book im looking for on my profile$/, async () => {
    await expect(await ProfilePage.firstBook.getText()).toContain('Learning JavaScript Design Patterns');
});