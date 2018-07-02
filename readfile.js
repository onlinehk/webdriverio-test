var fs = require('fs');

var downloadFile = function(filename){
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) throw err;
      var jsonObj = JSON.parse(data);
      console.log(jsonObj.length);
  });
}

downloadFile('1uu.txt');
downloadFile('popnumber.txt');