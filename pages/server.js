// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

let downloadCount = 0;

app.use(bodyParser.json());

app.get("/api/getDownloadCount", (req, res) => {
  res.json({ count: downloadCount });
});

app.post("/api/updateDownloadCount", (req, res) => {
  const { count } = req.body;
  downloadCount = count;
  res.json({ success: true, count: downloadCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
