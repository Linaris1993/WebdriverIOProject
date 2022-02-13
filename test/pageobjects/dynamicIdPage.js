import Page from "./page";

class dynamicIdPage extends Page {
    get dinamicIdLink() { return $('a[href="/dynamicid"]'); }
    get BtnWithDynamicId() { return $('//button[@class="btn btn-primary"]'); }
    get h3() { return $('h3') };

    open() {
        return super.open('http://uitestingplayground.com/home/dynamicid');
    }
}

export default new dynamicIdPage();