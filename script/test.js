//print all the file paths in all the sub directories of directory path ../developer-portal/docs

var fs = require('fs');
var path = require('path');
var dir =  '../developer-portal/docs/advanced';
// var ext = process.argv[3];

fs.readdir(dir, function(err, list) {
    if (err) throw err;
    list.forEach(function(file) {
        // if (path.extname(file) === '.' + ext) {
            console.log(path.join(dir, file));
        // }
    }
    );

}
);



