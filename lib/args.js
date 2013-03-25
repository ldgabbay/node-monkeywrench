function Args(expected) {
    this.expected = expected;
}

Args.prototype._option = function(opt) {
    var me = this;
    if ( opt.length === 1 ) {
        
    }
};

Args.prototype._set = function(opt, arg) {
    console.log(">> %s = %s", opt, arg);
};

Args.prototype.parse = function(args) {
    // args has already been stripped of 'node' and '*.js' arguments
    var me = this;
    var opts = {};
    var remainder = [];
    var waiting = [];
    var x;
    for ( var i=0; i!=args.length; ++i ) {
        var arg = args[i];
        if ( waiting.length != 0 ) {
            var opt = waiting.shift();
            if ( arg.match(/^-/) ) {
                // TODO fail
                throw 0;
            }
            opts[opt] = arg;
        } else if ( (x=arg.match(/^--([^=]+)(=(.*))?$/)) ) {
            if ( x[1].charAt(0) == 'x' ) {
                // expecting argument
                if ( x[2] ) {
                    opts[x[1]] = x[3];
                } else {
                    waiting.push(x[1]);
                }
            } else {
                opts[x[1]] = true;
            }
        } else if ( (x=arg.match(/^--$/)) ) {
            // done processing
            remainder = remainder.concat(args.slice(i+1));
            break;
        } else if ( (x=arg.match(/^-(.+)$/)) ) {
            for ( var j=0; j!=x[1].length; ++j ) {
                opts[x[1].charAt(j)] = true;
            }
        } else {
            remainder.push(arg);
        }
    }
    console.log(opts);
    console.log(remainder);
};

module.exports = Args;
