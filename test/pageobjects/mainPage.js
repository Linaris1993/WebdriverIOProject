const Page = require('./page')


class MainPage extends Page {
    get h1() { return $('h1[id="title"]') };
    get h3() { return $('h3') };
    open() {
        return super.open('http://uitestingplayground.com');
    }
}

module.exports = new MainPage();
