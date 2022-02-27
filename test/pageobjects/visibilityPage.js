const Page = require ("./page");

class visibilityPage extends Page {
    
    get visibilityLink() { return  $('a[href="/visibility"]') };
    get hideBtn() { return $('#hideButton') };
    get opacity0Btn() { return $('//button[@id="transparentButton"]') };
    get removedBtn() { return $('//button[@id="removedButton"]') };
    get visibilityHiddenBtn() { return $('#invisibleButton') };
    get zeroWidthBtn() { return $('#zeroWidthButton') };
    get DisplayNoteBtn() { return $('#notdisplayedButton') };
    get overlappedBtn() { return $('#overlappedButton') };
    get offscreenBtn() { return $('#offscreenButton') };

    open() {
        return super.open('http://uitestingplayground.com/visibility'); 
    }
}

module.exports = new visibilityPage();