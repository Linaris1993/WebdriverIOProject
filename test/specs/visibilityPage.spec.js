const mainPage = require("../pageobjects/mainPage");
const visibilityPage = require("../pageobjects/visibilityPage");

describe('Visibility Page', () => {

    const visibilitPageH3 = 'Visibility'; 

    beforeEach(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.refresh();
    })

    it('Clicking on "Visibility" link redirects me to appropriate page', async() => {
        await visibilityPage.open();

        await expect(visibilityPage.visibilityLink).toBeExisting();
        visibilityPage.visibilityLink.click();
        await expect(mainPage.h3).toHaveText(visibilitPageH3);
        await expect(browser).toHaveUrl('http://uitestingplayground.com/visibility');
    });

    it('Visibility scenario', async () => {
        visibilityPage.hideBtn.click(); //need to fix
        // await expect(visibilityPage.hideBtn).toBeDisplayed();
        // const opacityBtn = await $('//button[@id="transparentButton"]');
        // const style = await opacityBtn.getCSSProperty('style')
        // console.log(style)
        // await expect(style).toHaveStyle('opacity: 0')
        // await expect(visibilityPage.removedBtn).not.toBeDisplayed();
        // await expect(visibilityPage.visibilityHiddenBtn).isDisplayed().to.be.false;
        // await expect(visibilityPage.zeroWidthBtn).isDisplayed().to.be.false;
        // await expect(visibilityPage.DisplayNoteBtn).isDisplayed().to.be.false;
        // await expect(visibilityPage.overlappedBtn).isDisplayed().to.be.false;
        // await expect(visibilityPage.offscreenBtn).isDisplayed().to.be.false;
      });

});