const Page = require('../pageobjects/page');

class overlappedElementPage extends Page {

    get overlappedElementLink() { return $('a[href="/overlapped"]'); }
    get idInput() { return $('input[id="id"]'); }
    get nameInput() { return $('input[id="name"]'); }

    open() {
        return super.open('/overlapped'); 
    }
}

module.exports = new overlappedElementPage();