var http = require('http');
var url = require("url");
var path = require("path");
var fs = require('fs');

var downloadFile = function(filename){
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) throw err;
      var jsonObj = JSON.parse(data);
      jsonObj.forEach(function (item){
        var parsed = url.parse(item);
        var file = fs.createWriteStream('download/' + path.basename(parsed.pathname));
        http.get(item, function (response) {
          response.pipe(file);
        });
      });
  });
}

downloadFile('1uu.txt');
downloadFile('popnumber.txt');