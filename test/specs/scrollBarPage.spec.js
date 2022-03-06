const mainPage = require("../pageobjects/mainPage");
const scrollBarPage = require("../pageobjects/scrollBarPage");

describe('ScrollBar Page', () => {

    const scrollVewH3 = 'Scrollbars';
    
    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Scrollbars" link redirects me to appropriate page', async ()  => {
        await scrollBarPage.open();

        await expect(scrollBarPage.scrollBarLink).toBeExisting();
        scrollBarPage.scrollBarLink.click();
        await expect(mainPage.h3).toHaveText(scrollVewH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/scrollbars');
    });

    it('Scroll Bar Scenario',  async ()  => {
        const element = $('#hidingButton'); 
       element.scrollIntoView();
       await (scrollBarPage.hiddenBtn).waitForDisplayed( { timeOut: 5000 } );
       await expect (scrollBarPage.hiddenBtn).toBeDisplayed();
     });

});
