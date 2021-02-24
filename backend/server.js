import express, { urlencoded } from "express";
import shortUrl from "node-url-shortener";
import validUrl from "valid-url";
import path from "path";

const app = express();

app.get("/api", async (req, res) => {
  var payload = req.query.url;
  if (validUrl.isUri(payload)) {
    await shortUrl.short(payload, function (err, url) {
      res.json({ full: payload, short: url });
    });
  } else {
    res.status(404).send("This is not a valid URL");
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("url_react/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "url_react", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port);
