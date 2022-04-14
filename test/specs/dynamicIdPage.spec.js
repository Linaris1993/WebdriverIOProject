const mainPage = require("../pageobjects/mainPage");
const dynamicIdPage = require("../pageobjects/dynamicIdPage");
const { config } = require("../../wdio.conf");

describe('Dynamic ID Page', () => {

    const dynamicDataH3 = 'Dynamic ID'; 

    beforeEach(async () => {
        await mainPage.open();
        await expect(dynamicIdPage.dinamicIdLink).toBeExisting();
        dynamicIdPage.dinamicIdLink.click();
    });

    it('Clicking on "Dynamic ID" link redirects me to appropriate page', async () =>  {
        await dynamicIdPage.open();
        await expect(mainPage.h3).toHaveText(dynamicDataH3);
        await expect(browser).toHaveUrl(config.baseUrl + '/dynamicid');
    });

    it('Dynamic ID Scenario', async () => {
        await dynamicIdPage.open();
        dynamicIdPage.BtnWithDynamicId.click( { force: true} );
        await expect(dynamicIdPage.BtnWithDynamicId).toHaveAttr('class', 'btn btn-primary')
    });
});