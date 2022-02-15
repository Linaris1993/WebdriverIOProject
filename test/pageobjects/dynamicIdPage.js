import Page from "./page";

class dynamicIdPage extends Page {
    get dinamicIdLink() { return $('a[href="/dynamicid"]'); }
    get BtnWithDynamicId() { return $('//button[@class="btn btn-primary"]'); }

    open() {
        return super.open('http://uitestingplayground.com/home/dynamicid');
    }
}

export default new dynamicIdPage();