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

// app.get("/tip/:total/:tipPercentage", (req, res) => {
//   const totalParam = req.params.total;
//   const tipPercentageParam = req.params.tipPercentage;

//   // Calculate the tip amount
//   const tipAmount = (totalParam * (tipPercentageParam / 100)).toFixed(2);

//   res.send(
//     `Your tip amount based on a total of $${totalParam} and a ${tipPercentageParam}% tip is: $${tipAmount}`
//   );
// });

 

const magic8Ball = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

app.get("/magic/:question", (req, res) => {
  const question = req.params.question;
  const response =
    magic8Ball[Math.floor(Math.random() * magic8BallResponses.length)];

  res.send(`
    <h1>Question: ${question}</h1>
    <h1>Magic 8 Ball Response: ${response}</h1>
  `);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
