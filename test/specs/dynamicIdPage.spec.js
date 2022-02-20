const mainPage = require("../pageobjects/mainPage");
const dynamicIdPage = require("../pageobjects/dynamicIdPage")
describe('Dynamic ID Page', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Dynamic ID" link redirects me to appropriate page', async () =>  {
        dynamicIdPage.open();
        await expect(dynamicIdPage.dinamicIdLink).toBeExisting();
        dynamicIdPage.dinamicIdLink.click();
        await expect(mainPage.h3).toHaveText('Dynamic ID');;
        browser.pause(5000)
       await expect(browser).toHaveUrl('http://uitestingplayground.com/dynamicid');
    });

    it('Dynamic ID Scenario', () => {
        const myInput = $('//button[@class="btn btn-primary"]');
        // dynamicIdPage.BtnWithDynamicId.click();
        // expect(myInput).not.toHaveClassContaining('btn btn-primary')
        //need to be fixed?
    });
});
