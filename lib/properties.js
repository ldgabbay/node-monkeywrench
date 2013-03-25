var Blob = require('./blob');

function PropertiesFile() {}

PropertiesFile.prototype = new Blob();

PropertiesFile.prototype.parseBlob = function(blob) {
    var lines = blob.split('\n');
    var object = {};
    for ( var i=0; i!=lines.length; ++i ) {
        var line = lines[i];
        var x;
        if ( line.match(/^\s*[!#]/) ) {
            // ignore comment
        } else if ( line.match(/^\s*$/) ) {
            // ignore blank line
        } else if ( (x = line.match(/^\s*([^\s:=]*)\s*[:=]\s*(.*)\s*$/)) ) {
            object[x[1]] = this._trim(x[2]);
        } else {
            // TODO fail
        }
    }
    console.log(object);
};

module.exports = PropertiesFile;
