const mainPage = require('../pageobjects/mainPage')

describe('Main Page', () => {
    const mainPageHeader =  'UI Test Automation' + '\n' + 'Playground'; 
    
    it('Verify header on Main Page is displayed', async () => {
        await mainPage.open();

        await expect(mainPage.h1).toBeExisting();
        await expect(mainPage.h1).toHaveText(mainPageHeader);
    });
});


