const mainPage = require('../pageobjects/mainPage')

describe('Main Page', () => {

    it('Verify header on Main Page is displayed', async () => {
        await mainPage.open();

        await expect(mainPage.h1).toBeExisting();
        await expect(mainPage.h1).toHaveTextContaining(
            'UI Test Automation' + '\n' + 'Playground');
    });
});


