const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/");
});

app.post("/evaluate", (req, res) => {
  let operand1 = req.body.operand1,
    operator = req.body.operator,
    operand2 = req.body.operand2;

  operand1 = parseInt(operand1);
  operand2 = parseInt(operand2);

  let result;

  switch (operator) {
    case "+":
      result = operand1 + operand2;
    case "-":
      result = operand1 - operand2;
    case "*":
      result = operand1 * operand2;
    case "/":
      result = operand1 / operand2;
  }

  console.log(result);

  return res.send(result);
});

app.listen(3000);
