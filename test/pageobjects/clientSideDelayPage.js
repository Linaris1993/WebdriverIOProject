const Page = require('./page');

class clientSideDelayPage extends Page{

    get clientSideDelayLink() { return $('a[href="/clientdelay"]'); }
    get btnTriggeringClientSideLogic() { return $('//button[@id="ajaxButton"]'); }
    get spinner() { return $('i[class="fa fa-spinner fa-spin"]'); }
    get messageContent() { return $('[id="content"] p'); }

    open() {
        return super.open('http://uitestingplayground.com/clientdelay'); 
    }

}
module.exports = new clientSideDelayPage();