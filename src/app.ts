// import express from "express";
import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
