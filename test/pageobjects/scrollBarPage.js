const Page = require ('./page');

class scrollBarPage extends Page {

    get scrollBarLink() { return $('a[href="/scrollbars"]') };
    get hiddenBtn() { return $('#hidingButton') };
    
    open() {
        return super.open('http://uitestingplayground.com/scrollbars'); 
    }
}

module.exports = new scrollBarPage(); 