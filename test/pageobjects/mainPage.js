import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    get h1() { return $('h1[id="title"]') };
    get h3() { return $('h3') };
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('http://uitestingplayground.com/home');
    }
}

export default new MainPage();
