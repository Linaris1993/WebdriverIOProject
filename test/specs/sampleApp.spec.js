const mainPage = require("../pageobjects/mainPage");
const sampleAppPage = require("../pageobjects/sampleApp");
// const faker = require('faker');

describe('Sample App test', function() 
{
    const sampleAppH3 = 'Sample App';
    const userName = 'ladyBug';
    const password = 'pwd';
    const wrongUserName = '';
    const wrongPassword = 'pdw';
    const logOutMsg = 'User logged out.';

    beforeEach ( async () => {
        await mainPage.open();
        await browser.maximizeWindow();
        await expect(sampleAppPage.sampleAppLink).toBeExisting();
        sampleAppPage.sampleAppLink.click();
    });

    afterEach( async() => {
        await browser.deleteAllCookies();
        await browser.refresh();
    });

    it('Clicking on "Sample App" link redirects me to appropriate page', async () => {
        await sampleAppPage.open();

        await expect(mainPage.h3).toHaveText(sampleAppH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/sampleapp');
        // await expect(browser).toHaveUrl(`${baseUrl} + '/sampleapp'`); //need to figure out 
    });

    // it('Sample App Happy Path Login', async() => {
    //     await expect(sampleAppPage.userName).toBeDisplayed();
    //     sampleAppPage.userName.setValue(userName);
    //     sampleAppPage.password.setValue(parseInt(password));
    //     sampleAppPage.loginBtn.click();
    //     await browser.pause(10000)
    //     await expect(sampleAppPage.loginMsg).toHaveTextContaining(`Welcome, ${userName} + '!'`);
    //     sampleAppPage.logOutBtn.click(); 
    //     await expect(sampleAppPage.loginMsg).toHaveText(logOutMsg);
    // });

    it('Sample App login with wrong userName', async () => {
        await sampleAppPage.open();

        await expect(sampleAppPage.userName).toBeDisplayed();
        sampleAppPage.userName.setValue(wrongUserName);
        sampleAppPage.password.setValue(password);
        sampleAppPage.loginBtn.click();
        await browser.pause(10000);
        expect(sampleAppPage.loginMsg).not.toHaveText(`Welcome, ${wrongUserName} + '!'`);
        expect(sampleAppPage.loginMsg).toHaveText('Invalid username/password');
        await expect(sampleAppPage.logOutBtn).not.toBeDisplayed();
    });

    it('sample App login with wrong password', async () => {
        await sampleAppPage.open();

        await expect(sampleAppPage.userName).toBeDisplayed();
        sampleAppPage.userName.setValue(userName);
        sampleAppPage.password.setValue(wrongPassword);
        sampleAppPage.loginBtn.click();
        await expect(sampleAppPage.loginMsg).not.toHaveText(`Welcome, ${userName} + '!'`);
        await expect(sampleAppPage.loginMsg).toHaveText('Invalid username/password');
        await expect(sampleAppPage.logOutBtn).not.toBeDisplayed();
    });

    it('sample App login with wrong name and wrong password', async () => {
        await sampleAppPage.open();

        await expect(sampleAppPage.userName).toBeDisplayed();
        sampleAppPage.userName.setValue(wrongUserName);
        sampleAppPage.password.setValue(wrongPassword);
        sampleAppPage.loginBtn.click();
        await expect(sampleAppPage.loginMsg).not.toHaveText(`Welcome, ${userName} + '!'`);
        await expect(sampleAppPage.loginMsg).toHaveText('Invalid username/password');
        await expect(sampleAppPage.logOutBtn).not.toBeDisplayed();
    });
});