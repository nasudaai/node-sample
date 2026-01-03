const args = process.argv.slice(2);

const obj = { key: args[0], value: args[1]};
console.log(obj);

const { key, value } = obj;
process.stdout.write(key + ": " + value + "\n");
