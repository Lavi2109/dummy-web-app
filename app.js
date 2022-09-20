const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello world 1");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});

const fs = require("fs");

var assetlinks = fs.readFileSync(
  __dirname + "/public/.well-known/assetlinks.json"
);
app.get("/.well-known/assetlinks.json", function (req, res, next) {
  res.set("Content-Type", "application/json");
  res.status(200).send(assetlinks);
});
