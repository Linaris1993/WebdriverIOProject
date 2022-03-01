const Page = require('../pageobjects/page')

class ajaxDataPage extends Page {
    get ajaxDataLink() { return $('a[href="/ajax"]') };
    get btnTriggeringAJAXRequest() { return $('#ajaxButton') };
    get requestMessage() { return $('//p[@class="bg-success"]') };
    get spinner() { return $('//i[@class="fa fa-spinner fa-spin"]') }; 

open() {
    return super.open('http://uitestingplayground.com/home/ajax');
}
}
module.exports = new ajaxDataPage();