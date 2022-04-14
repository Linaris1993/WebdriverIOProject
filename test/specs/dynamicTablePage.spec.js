const mainPage = require("../pageobjects/mainPage");
const dynamictablePage = require("../pageobjects/dynamicTablePage");
const { config } = require("../../wdio.conf");

describe('Dynamic Table Page', () => {

    const dynamicTableH3 = 'Dynamic Table';

    it('Clicking on "Dynamic Table" link redirects me to appropriate page', async () =>  {
        await dynamictablePage.open();

        await expect(dynamictablePage.dynamicTableLink).toBeExisting();
              dynamictablePage.dynamicTableLink.click();
        await expect(mainPage.h3).toHaveText(dynamicTableH3);
        await expect(browser).toHaveUrl(config.baseUrl + '/dynamictable');
    });

    it('Dynamic Page Scenario', async () => {
       // no idea how to find selector here lol
    });
})