const Page = require ('./page');

class scrollBarPage extends Page {

    get scrollBarLink() { return $('a[href="/scrollbars"]') };
    
    open() {
        return super.open('/scrollbars'); 
    }
}

module.exports = new scrollBarPage(); 