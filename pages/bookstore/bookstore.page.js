const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookStorePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchBox () { return $('#searchBox') }
    get rowSelection () { return $('//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[2]/div[2]/div/div[2]/span[2]/select') }
    get btnNext () { return $('button=Next') }
    get btnPrev () { return $('button=Previous') }
    get firstBook () { return $('/html/body/div[2]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div/div[2]/div/span/a') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async getBook (position) {
       return $(`/html/body/div[2]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[${position}]/div/div[2]/div/span/a`)
    }

    async searchBook (search) {
        await browser.pause(10000)
        await this.searchBox.setValue(search);
     }

    async orderBy (search) {
        switch (search) {
            case 'Author':
                await $('//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div/div[3]').click()
                break;
            case 'Title':
                await $('//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div/div[2]').click()
                break;
            default:
                break;
        }
        await browser.pause(3000)

     }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('books');
    }
}

module.exports = new BookStorePage();
