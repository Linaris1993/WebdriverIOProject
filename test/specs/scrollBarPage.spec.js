const mainPage = require("../pageobjects/mainPage");
const scrollBarPage = require("../pageobjects/scrollBarPage");

describe('ScrollBar Page', () => {

    const scrollVewH3 = 'Scrollbars';
    
    beforeEach(async () => {
        mainPage.open();
        await browser.maximizeWindow();
        await expect(scrollBarPage.scrollBarLink).toBeExisting();
        scrollBarPage.scrollBarLink.click();
    });

    afterEach(async () => {
     await browser.deleteAllCookies();
     await browser.refresh();
    });

    it('Clicking on "Scrollbars" link redirects me to appropriate page', async ()  => {
        await scrollBarPage.open();

        await expect(mainPage.h3).toHaveText(scrollVewH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/scrollbars');
    });

    it('Scroll Bar Scenario',  async ()  => {
        const element = $('#hidingButton'); 
       element.scrollIntoView();
       await (element).waitForDisplayed( { timeOut: 3000 } );
       await expect (element).toBeDisplayed();
     });
});
