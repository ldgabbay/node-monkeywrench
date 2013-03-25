var Blob = require('./blob');

function INIFile() {}

INIFile.prototype = new Blob();

INIFile.prototype.parseBlob = function(blob) {
    var lines = blob.split('\n');
    var section = null;
    var object = { "": {} };
    var section_object = object[""];
    for ( var i=0; i!=lines.length; ++i ) {
        var line = lines[i];
        var x;
        if ( line.match(/^[;#]/) ) {
            // ignore comment
        } else if ( line.match(/^\s*$/) ) {
            // ignore blank line
        } else if ( (x = line.match(/^\s*([^\s:=]*)\s*[:=]\s*(.*)\s*$/)) ) {
            section_object[x[1]] = this._trim(x[2]);
        } else if ( (x = line.match(/^\[([^\]]*)\]\s*$/)) ) {
            section_object = object[x[1]] = object[x[1]] || {};
        } else {
            // TODO fail
        }
    }
    console.log(object);
};

module.exports = INIFile;
