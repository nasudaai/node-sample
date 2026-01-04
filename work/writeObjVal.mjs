const argv = process.argv.slice(2);
const str = argv[0];
const obj = { str };
//const word = obj.str;
process.stdout.write( obj.str  + "\n");
