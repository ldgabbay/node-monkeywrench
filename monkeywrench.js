var Args=require('./lib/args');
var Blob=require('./lib/blob');
var ini = new Blob.INIFile();
var pf = new Blob.PropertiesFile();
var args = new Args.Args();



ini.parseFile("example/sample.ini");
pf.parseFile("example/sample.properties");
args.parse(process.argv.slice(2));
