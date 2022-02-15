import mainPage from "../pageobjects/mainPage";
import dynamicIdPage from "../pageobjects/dynamicIdPage";
import Page from "../pageobjects/page";

describe('Dynamic ID Page', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Dynamic ID" link redirects me to appropriate page', async () => {
        await dynamicIdPage.open();
        expect(dynamicIdPage.dinamicIdLink).toBeExisting();
        dynamicIdPage.dinamicIdLink.click();
        expect(mainPage.h3).toHaveTextContaining('Dynamic');
        expect(browser).toHaveUrl('http://uitestingplayground.com/dynamicid');
    });

    it('Dynamic ID Scenario', () => {
        const myInput = $('//button[@class="btn btn-primary"]');
        // dynamicIdPage.BtnWithDynamicId.click();
        // expect(myInput).not.toHaveClassContaining('btn btn-primary')
        //need to be fixed?
    });
});