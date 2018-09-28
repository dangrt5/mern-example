const express = require("express");
const PORT = process.env.PORT || 9000;
const {resolve} = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static(resolve(__dirname, "client", "dist")));
app.use(express.json());

app.post("/api/login", (req, res) => {
  console.log("Post Data:", req.body);

  res.send({
    success: true,
    message: "You are now logged in",
    receivedData: req.body
  })
})

app.get("/api/test", (req, response) => {
  response.send({
    success: true,
    message: "The API is working",
    date: new Date().toDateString()
  });
});

app.get("/api/user", (req, response) => {
  response.send({
    name: "Kathy Simmons",
    age: 38,
    email: "therealkathy@mail.com"
  })
})

app.get("*", (req, response) => {
  response.sendFile(resolve(__dirname, "client", "dist", "index.html"));
})

app.listen(PORT, () => {
  console.log("Server is running on Port:" + PORT);
});
