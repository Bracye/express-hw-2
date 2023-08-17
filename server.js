const express = require("express");
const app = express();
const port = 5000;

// app.get("/greeting", (req, res) => {
//   res.send("<h1> Hello Stranger! <h1>");
// });

// app.get("/greeting/:name", (req, res) => {
//   res.send(`<h1> Hello, ${req.params.name}! It's so great to see you! </h1>`);
// });

// const express = require("express");
// const app = express();
// const port = 5000;

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const totalParam = req.params.total;
  const tipPercentageParam = req.params.tipPercentage;

  // Calculate the tip amount
  const tipAmount = (totalParam * (tipPercentageParam / 100)).toFixed(2);

  res.send(
    `Your tip amount based on a total of $${totalParam} and a ${tipPercentageParam}% tip is: $${tipAmount}`
  );
});

 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
