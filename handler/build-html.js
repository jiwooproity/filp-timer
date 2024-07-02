const fs = require("fs");

(() => {
  let html = fs.readFileSync("./index.html").toString();
  html = html.replace("./src/index.ts", "./index.js");
  html = html.replace("./src/style.css", "./style.css");
  fs.writeFileSync("./build/index.html", html);
})();
