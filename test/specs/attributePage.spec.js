const mainPage = require('../pageobjects/mainPage');
const attributePage = require('../pageobjects/attributePage');

describe('Class Attribute Page', () => {

    const attributePageH3 = 'Class Attribute'
    
    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Attribute" link redirects me to appropriate page', async () => {
        await attributePage.open();

        await expect(attributePage.attributeLink).toBeExisting();
        attributePage.attributeLink.click();
        await expect(mainPage.h3).toHaveTextContaining(attributePageH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/classattr');
    });

    it('Attribute scenario', async() => {
        // await attributePage.blueBtn.waitForDisplayed(); //no idea how to find blue btn
        // const elem = await attributePage.blueBtn
        // const color = await elem.getCSSProperty('color')
        // console.log(color)
        // const alertText = await browser.getAlertText();
        // await browser.acceptAlert();
        // await expect(alertText).toHaveText('Primary button pressed');
      });

});