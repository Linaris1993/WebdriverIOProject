const drivers = {
    chrome: {version: '100.0.4896.88'}, //https://chromedriver.chromium.org
};

const baseUrl = 'http://uitestingplayground.com';

exports.config = {

    specs: [
        './test/specs/**/*.js'
        // './test/specs/dynamicIdPage.spec.js'
       ],
 
    exclude: [
  
    ],

    maxInstances: 1,

    capabilities: [{
    
  
        maxInstances: 5,
   
        browserName: 'chrome',
        acceptInsecureCerts: true
 
    }],

    logLevel: 'info',
  

    bail: 0,

    baseUrl: 'http://uitestingplayground.com',

    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,
 
    connectionRetryCount: 3,

    // services: ['chromedriver'],
    services: [
        ['chromedriver', {
            logPath: 'logs',
            installArgs: { drivers },
            args: {drivers},
        }]
    ],
    

    framework: 'mocha',
ileRetriesDeferred: false,

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function() {
       await browser.url(baseUrl);
        await browser.maximizeWindow();
    },

    after: async function() {
        await browser.deleteAllCookies();
        await  browser.refresh();
    }

}
