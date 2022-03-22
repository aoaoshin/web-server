const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('Hello World')
// })

// app.get('/about', function (req, res) {
//   res.send('Aboutページ')
// })

app.post("/api/v1/quiz", function(req, res) {
  console.log("/api/v1/quiz");
  const kotae = req.body.kotae;
  console.log(req.body);
//  res.send(kotae);
//  res.send("アクション実施");
  res.redirect("/correct.html");
});

app.listen(3000, function() {
  console.log("I am running");
})
