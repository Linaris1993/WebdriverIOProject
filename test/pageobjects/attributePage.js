const Page = require('./page');

class attributePage extends Page{

    get attributeLink() { return $('a[href="/classattr"]') }
    get blueBtn() { return $('//button[contains(@class,"btn class3 btn-primary")]') };

    open() {
        return super.open('http://uitestingplayground.com/classattr'); 
    }
}

module.exports = new attributePage();