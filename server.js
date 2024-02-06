// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

let downloadCount = 0;

app.use(bodyParser.json());

// API endpoint to get the current download count
app.get("/api/getDownloadCount", (req, res) => {
  res.json({ count: downloadCount });
});

// API endpoint to update the download count
app.post("/api/updateDownloadCount", (req, res) => {
  const { count } = req.body;

  // Validate the count if needed
  if (typeof count !== "number" || count < 0) {
    return res.status(400).json({ error: "Invalid count value" });
  }

  downloadCount = count;
  res.json({ success: true, count: downloadCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
