const Page = require('../pageobjects/page');

class sampleAppPage extends Page {
    get sampleAppLink() { return $('a[href="/sampleapp"]'); }
    get userName() { return $('input[name="UserName"]'); }
    get password() { return $('input[name="Password"]'); }
    get loginBtn() { return $('button[id="login"]'); }
    get loginMsg() { return $('label[id="loginstatus"]'); }
    get logOutBtn() { return $('//button[text()="Log Out"]'); }

    open() {
        return super.open('/sampleapp'); 
    }
}

module.exports = new sampleAppPage();