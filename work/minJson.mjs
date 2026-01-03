const args = process.argv.slice(2);

const obj = { key: args[0], value: args[1] };
const { key, value } = obj;

process.stdout.write("key: " + key + ", \n" + "value: " + value + "\n");
process.stdout.write(key + ": " + value + "\n");
console.log(obj);
