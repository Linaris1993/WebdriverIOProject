const mainPage  = require('../pageobjects/mainPage');
const overlappedElementPage = require('../pageobjects/overlappedElementPage');

describe('Overlapped Element Page', () => {

    const overlappedElementH3 = 'Overlapped Element';
    const idText = 'test id';
    const nameText = 'name id'

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Overlapped Element" link redirects me to appropriate page', async() => {
        await overlappedElementPage.open();

        await expect(overlappedElementPage.overlappedElementLink).toBeExisting();
        overlappedElementPage.overlappedElementLink.click();
        await expect(mainPage.h3).toHaveText(overlappedElementH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/overlapped');
    });

    it('Overlapped Element Scenario', async() => {
        // overlappedElementPage.idInput.setValue(idText);//why with text input it doesn't work? 

        const elem = await  $('input[id="name"]'); 
       await elem.scrollIntoView();
       await expect (elem).toBeDisplayed();
       elem.setValue(nameText);
       await expect(overlappedElementPage.nameInput).toHaveValue(nameText);
    });

});