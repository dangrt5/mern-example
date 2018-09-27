const express = require("express");
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, response) => {
  response.send("<h1>hi</h1>");
})

app.listen(PORT, () => {
  console.log("Server is running on Port:" + PORT);
});
