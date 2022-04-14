const ajaxDataPage = require("../pageobjects/ajaxDataPage");
const mainPage = require ("../pageobjects/mainPage");
const { config } = require("../../wdio.conf");


describe('Ajax Data Page', () => {

    const ajaxDataH3 = 'AJAX Data';
    const requestMessageText = 'Data loaded with AJAX get request.';

    beforeEach(async () => {
        await mainPage.open();
        await ajaxDataPage.ajaxDataLink.waitForDisplayed();
        ajaxDataPage.ajaxDataLink.click();
    });

    it('Clicking on "Ajax Data" link redirects me to appropriate page', async () => {
        await expect(mainPage.h3).toHaveText(ajaxDataH3);
        await expect(browser).toHaveUrl(config.baseUrl + '/ajax');
    });

    it('Ajax Data Scenario', async () => {
        await ajaxDataPage.btnTriggeringAJAXRequest.waitForDisplayed( { timeout: 1000 } );
        await ajaxDataPage.btnTriggeringAJAXRequest.click();
        await expect(ajaxDataPage.spinner).toBeDisplayed();
        await (ajaxDataPage.requestMessage).waitForDisplayed( { timeout: 150000 } );
        await  expect(ajaxDataPage.requestMessage).toHaveText(requestMessageText);
    });
});
