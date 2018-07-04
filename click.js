var webdriverio = require('webdriverio');
var cheerio = require('cheerio');
var fs = require('fs');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

var requestUrl = function(url, filename){
webdriverio
    .remote(options)
    .init()
    .url(url)
    .click('[name="Image2"]')
    // .getSource().then(function (source) {
    //     console.log(source); // outputs: "<!DOCTYPE html>\n<title>Webdriver.io</title>..."
    //     fs.writeFile("page1.html", source, function (err) {
    //         if (!err) console.log(filename + ' success write to file');
    //     });
    // })
    .pause(3000)
    .click('[name="Image4"]')
    // .getSource().then(function (source) {
    //     console.log(source); // outputs: "<!DOCTYPE html>\n<title>Webdriver.io</title>..."
    //     fs.writeFile("page2.html", source, function (err) {
    //         if (!err) console.log(filename + ' success write to file');
    //     });
    // })
    .addValue('[name="search"]', '6888')
    .pause(3000)
    .click('[name="submit"]')
    .pause(10000)
    .end()
    .catch(function(err) {
        console.log(err);
    });
};

requestUrl('http://www.popnumber.com', 'popnumber');