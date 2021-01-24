import express from "express";
import data from "./data.js";

const port = process.env.PORT || 5000;
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
