import mainPage from "../pageobjects/mainPage";
import ajaxDataPage from "../pageobjects/ajaxDataPage";
import Page from "../pageobjects/page";

describe('Ajax Data Page', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Ajax Data" link redirects me to appropriate page', async () => {
        await ajaxDataPage.open();
        await expect(ajaxDataPage.ajaxDataLink).toBeExisting();
        ajaxDataPage.ajaxDataLink.click();
        await expect(mainPage.h3).toHaveTextContaining('Data');
        await expect(browser).toHaveUrl('http://uitestingplayground.com/ajax');
    });

    it('Ajax Data Scenario', () => {
        ajaxDataPage.btnTriggeringAJAXRequest.click();
        browser.waitUntil({ timeout: 15000 });
        expect(ajaxDataPage.requestMessage.toHaveTextContaining('Data with AJAX get request.'));
    });
});