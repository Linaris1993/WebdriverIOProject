const Page = require('../pageobjects/page')

class dynamicTablePage extends Page {
    get dynamicTableLink() { return $('a[href="/dynamictable"]') };

    open() {
        return super.open('http://uitestingplayground.com/dynamictable');
    }
}

module.exports = new dynamicTablePage();