var Blob = require('./blob');

function JSONFile() {}

JSONFile.prototype = new Blob();

JSONFile.prototype.parseBlob = function(blob) {
    var object = JSON.parse(blob);
};

module.exports = JSONFile;
