const mainPage  = require('../pageobjects/mainPage');
const clientSideDelayPage = require('../pageobjects/clientSideDelayPage');

describe('Client Side Delay Page', () => {

    const clientSideDelayH3 = 'Client Side Delay';
    const clientSideMessage = 'Data calculated on the client side.';

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Client Side Delay" link redirects me to appropriate page', async () => {
        await clientSideDelayPage.open();

        await expect(clientSideDelayPage.clientSideDelayLink).toBeExisting();
        clientSideDelayPage.clientSideDelayLink.click();
        await expect(mainPage.h3).toHaveText(clientSideDelayH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/clientdelay');
     });

     it('Client Side Delay scenario', async ()  => {
        clientSideDelayPage.btnTriggeringClientSideLogic.click();
        await clientSideDelayPage.spinner.waitForDisplayed();
        await browser.waitUntil(
            async() => (await clientSideDelayPage.messageContent.getText()) === clientSideMessage,
            {
                timeout: 150000,
                timeoutMsg: 'expected message is not found' // message doesn't work for some reason
            })

     });
});