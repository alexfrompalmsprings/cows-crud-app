// express & port
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// connects the db
const db = require("./db");

/*
USEFUL LINKE
https://codewithhugo.com/parse-express-json-form-body/
*/
app.use(express.json())
// false when a passing a simple submit form; keep it true when you are sending arrays of maps of values
app.use(express.urlencoded({
  extended: true
}))


//! need to add my db queries into here!

// this is the get
app.get('/api/cows', (req, res) => {
  db.query('SELECT * FROM cows', function (err, results) {
    if (err) {
      res.sendStatus(404)
    } else {
      console.log('results ------->', results)
      res.sendStatus(200)
    }
  })
})

// this the post
app.post('/api/cows', (req, res) => {

  var queryPost = "INSERT INTO cows (cowName, cowDescription) VALUES( ?, ?)";

  db.query(queryPost, req.body.cowName, req.body.cowDescription, function (err, results) {
    if (err) {
      res.sendStatus(404)
    } else {
      console.log('results ------->', results)
      res.sendStatus(200)
    }
  })
})

//todo -> need to have the DELETE & PUT METHODS

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})