const Page = require('./page')

class dynamicIdPage extends Page {
    
    get dinamicIdLink() { return $('a[href="/dynamicid"]'); }
    get BtnWithDynamicId() { return $('//button[@class="btn btn-primary"]'); }

    open() {
        return super.open('/dynamicid');
    }
}

module.exports = new dynamicIdPage();