const path = require("path");
let express = require("express");

let DIST_DIR = path.join(__dirname, "dist");

let PORT = 3000;
var app = express();

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT)
