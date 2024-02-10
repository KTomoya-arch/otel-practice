import express, { Express } from "express";

const PORT: number = parseInt(process.env.PORT || "8080");
const app: Express = express();

app.get("/", (req, res) => {
  res.send("HelloWorld");
});

app.listen(PORT, () => {
  console.log(`Listening for requests on https://localhost:${PORT}`);
});
