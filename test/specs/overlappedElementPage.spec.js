const mainPage  = require('../pageobjects/mainPage');
const overlappedElementPage = require('../pageobjects/overlappedElementPage');

describe('Overlapped Element Page', () => {

    const overlappedElementH3 = 'Overlapped Element';
    const idText = 'test id';
    const nameText = 'name id'

    beforeEach(async () => {
        mainPage.open();
        await expect(overlappedElementPage.overlappedElementLink).toBeExisting();
        overlappedElementPage.overlappedElementLink.click();
    });

    afterEach(async () => {
        await browser.deleteAllCookies();
        await browser.refresh();
    });

    it('Clicking on "Overlapped Element" link redirects me to appropriate page', async() => {
        await mainPage.h3.waitForDisplayed();
        await expect(mainPage.h3).toHaveText(overlappedElementH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/overlapped');
    });

    it('Overlapped Element Scenario', async() => {
        // overlappedElementPage.idInput.setValue(idText);//why with text input it doesn't work? 

        await overlappedElementPage.open();
        await overlappedElementPage.nameInput.waitForDisplayed();
       await overlappedElementPage.nameInput.scrollIntoView();
       await expect (overlappedElementPage.nameInput).toBeDisplayed();
       overlappedElementPage.nameInput.setValue(nameText);
       await expect(overlappedElementPage.nameInput).toHaveValue(nameText);
    });

});