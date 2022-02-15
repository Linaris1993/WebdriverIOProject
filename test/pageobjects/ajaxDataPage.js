import Page from "./page";

class ajaxDataPage extends Page {
    get ajaxDataLink() { return $('a[href="/ajax"]') };
    get btnTriggeringAJAXRequest() { return $('#ajaxButton') };
    get requestMessage() { return $('//p[@class="bg-success"]') };

open() {
    return super.open('http://uitestingplayground.com/home/ajax');
}
}
export default new ajaxDataPage();