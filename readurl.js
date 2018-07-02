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
    // .getSource().then(function(source) {
    //     console.log(source); // outputs: "<!DOCTYPE html>\n<title>Webdriver.io</title>..."
    // })
    .getHTML('body').then(function(html){
    	var $ = cheerio.load(html);
    	var options = [];
    	$('img').each(function(){
    		var img_url = $(this).attr('src');
    		if (!img_url.startsWith("http://")) {
    			img_url = url + '/' + img_url;
    		}
    		options.push(img_url);
    	});
    	var jsonData = JSON.stringify(options, null, 2);
    	fs.writeFile(filename + ".txt", jsonData, function(err) {
    		if (!err) console.log(filename + ' success write to file');
    	});
	})
    .end()
    .catch(function(err) {
        console.log(err);
    });
};

requestUrl('http://www.1uu.net', '1uu');
requestUrl('http://www.popnumber.com', 'popnumber');