const mainPage = require("../pageobjects/mainPage");
const scrollBarPage = require("../pageobjects/scrollBarPage");
const { config } = require("../../wdio.conf");

describe('ScrollBar Page', () => {

    const scrollVewH3 = 'Scrollbars';
    
    beforeEach(async () => {
        mainPage.open();
        await expect(scrollBarPage.scrollBarLink).toBeExisting();
        scrollBarPage.scrollBarLink.click();
    });

    it('Clicking on "Scrollbars" link redirects me to appropriate page', async ()  => {
        await scrollBarPage.open();

        await expect(mainPage.h3).toHaveText(scrollVewH3);
        await expect(browser).toHaveUrl(config.baseUrl + '/scrollbars');
    });

    it('Scroll Bar Scenario',  async ()  => {
        const element = $('#hidingButton'); 
       element.scrollIntoView();
       await (element).waitForDisplayed( { timeOut: 3000 } );
       await expect (element).toBeDisplayed();
     });
});
