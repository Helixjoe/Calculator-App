const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.listen(3000, function () {
  console.log("Server Started");
});

app.use(bodyParser.urlencoded({ extended: true }));
//Regular Calculator
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  res.send("Thank you for trying!. Result is " + (num1 + num2));
});
// BMI Calculator

app.get("/styles.css", function (req, res) {
  res.sendFile(__dirname + "/styles.css");
});
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);

  res.send("BMI Calculated is " + weight / (height * height));
});
