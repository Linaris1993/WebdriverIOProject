import MainPage from  '../pageobjects/mainPage';

describe('Main Page', () => {
    it('Verify header on Main Page is displayed', async () => {
        await MainPage.open();

        await expect(MainPage.h1).toBeExisting();
        await expect(MainPage.h1).toHaveTextContaining(
            'UI Test Automation' + '\n' + 'Playground');
    });
});


