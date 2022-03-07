const mainPage = require("../pageobjects/mainPage");
const dynamicIdPage = require("../pageobjects/dynamicIdPage");

describe('Dynamic ID Page', () => {

    const dynamicDataH3 = 'Dynamic ID'; 

    beforeEach(async () => {
        browser.maximizeWindow();
        await mainPage.open();
        await expect(dynamicIdPage.dinamicIdLink).toBeExisting();
        dynamicIdPage.dinamicIdLink.click();
    });

    afterEach(async ()=> {
        browser.deleteAllCookies();
        browser.refresh();
    });

    it('Clicking on "Dynamic ID" link redirects me to appropriate page', async () =>  {
        await dynamicIdPage.open();
        await expect(mainPage.h3).toHaveText(dynamicDataH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/dynamicid');
    });

    it('Dynamic ID Scenario', async () => {
        await dynamicIdPage.open();
        dynamicIdPage.BtnWithDynamicId.click( { force: true} );
        await expect(dynamicIdPage.BtnWithDynamicId).toHaveAttr('class', 'btn btn-primary')
    });
});