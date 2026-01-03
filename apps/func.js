const args = ["a", "b", "c"];

function reStr(args) {
  
  const string = args.toString();
  return string;
};

function write(str) {

  process.stdout.write(str + "\n");
};


write("string");
write(reStr(args));
