const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const html = fs.readFileSync("./homepage/index.html");
const loginHandler = require("./routing/login");
const bodyParser = require("body-parser");

// routes // get // methods
app.get("/", (req, res) => {
  res.sendFile("./homepage/index.html", { root: __dirname });
});

app.get("/play", (req, res) => {
  res.sendFile("./playnow/index.html", { root: __dirname });
});

app.get("/backtohome", (req, res) => {
  res.redirect("/");
});

app.get("/sign-up", (req, res) => {
  res.sendFile("./signUp-In/signUp.html", { root: __dirname });
});

app.get("/movetologinpage", (req, res) => {
  res.sendFile(__dirname + "/signUp-In/logIn.html");
});

//login handler
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/signUp-In/logIn.html");
});
app.post("/login", loginHandler.handleLogin);

//memanggil asset & css
app.use(express.static(__dirname + "/public"));

//mengakhiri respon server
// app.response.end();

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
