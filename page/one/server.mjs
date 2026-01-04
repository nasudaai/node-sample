import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const html = readFileSync("public/index.html", "utf-8");
const js = readFileSync("public/src/main.js", "utf-8");
const style = readFileSync("public/styles.css", "utf-8");

const server = createServer((req, res) => {
  if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css; charset=utf-8 "});
    res.end(style);
    return;
  }

  if (req.url === "/src/main.js") {
    res.writeHead(200, { "content-type": "text/javascript; charset=utf-8" });
    res.end(js);
    return;
  }

  res.writeHead(200, { "content-type": "text/html; charset=utf-8"});
  res.end(html);
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000");
});
