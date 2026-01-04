const arr = [ 1, 2, 3, 4, 5];
const total = arr.reduce((acc, elm) => acc + elm);
process.stdout.write(JSON.stringify(total) + "\n");
process.stdout.write(JSON.stringify("total") + "\n");
