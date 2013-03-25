var Fs = require('fs');
var Http = require('http');
var Https = require('https');
var Url = require('url');

function Blob() {}

Blob.prototype.parseFile = function(filename) {
    var me = this;
    if ( Fs.exists(filename, function(exists) {
        if ( exists ) {
            Fs.readFile(filename, function(err, data) {
                if ( err ) {
                    // TODO fail
                } else {
                    me.parseBlob(data.toString());
                }
            });
        } else {
            // TODO fail
        }
    }) ) {
    }
};

Blob.prototype.parseURL = function(url) {
    var me = this;
    var protocol = Url.parse(url).protocol;
    var handler;
    if ( protocol === 'http:' ) {
        handler = Http;
    } else if ( protocol === 'https:' ) {
        handler = Https;
    } else {
        // TODO fail
        return;
    }
    var req = handler.request(url, function(resp) {
        var chunks = [];
        resp.on('data', function(chunk) {
            chunks.push(chunk);
        });
        resp.on('end', function() {
            me.parseBlob(chunks.join(''));
        });
        resp.on('error', function(err) {
            // TODO fail
        });
    });
    req.on('error', function(err) {
        // TODO fail
    });
    req.end();
};

Blob.prototype.parseBlob = function(blob) {
    console.log(blob);
};

Blob.prototype._trim = function(str) {
    str = str.replace(/^\s+/, '');
    var i=str.length;
    while ( --i>=0 && /\s/.test(str.charAt(i)) )
        ;
    return str.substring(0, i+1);
};

module.exports = Blob;
