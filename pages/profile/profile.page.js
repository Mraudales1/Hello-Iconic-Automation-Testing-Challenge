const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstBook () { return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div/div[2]/div/span/a') }
    get firtBookDeleteButton () { return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div/div[5]/div/span') }
    get btnDeleteAccount () { return $('#submit=Delete Account') } 
    get btnDeleteBooks () { return $('#submit=Delete All Books') }
    get btnLogout () { return $('#submit=Log out') } 
    get deleteDialogTitle () { return $('#example-modal-sizes-title-sm') } 
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('profile');
    }
}

module.exports = new ProfilePage();
