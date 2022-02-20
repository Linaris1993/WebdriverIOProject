const ajaxDataPage = require("../pageobjects/ajaxDataPage")
const mainPage = require ("../pageobjects/mainPage")


describe('Ajax Data Page', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.pause(1000000)
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Ajax Data" link redirects me to appropriate page', async () => {
        await ajaxDataPage.open();
        await expect(ajaxDataPage.ajaxDataLink).toBeExisting();
        await ajaxDataPage.ajaxDataLink.click();
    //   await  expect(mainPage.h3).toHaveTextContaining('Data ID'); //passed
    //   await expect(mainPage.h3).toHaveTextContaining('Data'); //passed
    //   await expect(mainPage.h3).toHaveTextContaining('ulala'); //failed
        await expect(browser).toHaveUrl('http://uitestingplayground.com/ajax');
    });

    it('Ajax Data Scenario', () => {
        ajaxDataPage.btnTriggeringAJAXRequest.click();
        //browser.waitUntil({ timeout: 15000 }); waitUntil работает не так
        expect(ajaxDataPage.requestMessage.toHaveTextContaining('Data with AJAX get request.'));
    });
});
