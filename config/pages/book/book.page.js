const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookPage extends Page {
    /**
     * define selectors using getter methods
     */
    get addBookButton () { return $('#addNewRecordButton=Add To Your Collection') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('books');
    }
}

module.exports = new BookPage();