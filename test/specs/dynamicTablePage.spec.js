const mainPage = require("../pageobjects/mainPage");
const dynamictablePage = require("../pageobjects/dynamicTablePage");

describe('Dynamic Table Page', () => {

    const dynamicTableH3 = 'Dynamic Table';

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Dynamic Table" link redirects me to appropriate page', async () =>  {
        await dynamictablePage.open();

        await expect(dynamictablePage.dynamicTableLink).toBeExisting();
              dynamictablePage.dynamicTableLink.click();
        await expect(mainPage.h3).toHaveText(dynamicTableH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/dynamictable');
    });

    it('Dynamic Page Scenario', async () => {
       // no idea how to find selector here lol
    });
})