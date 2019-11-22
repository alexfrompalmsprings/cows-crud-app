// express & port
const express = require('express');
const app = express();
const port = 3005;
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

// app.use(express.static(__dirname));
// console.log(__dirname);
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('public'))




//! need to add my db queries into here!

// this is the get
app.get('/api/cows', (req, res) => {
  db.query('SELECT cowName, cowDescription FROM cows', function (err, results) {
    if (err) {
      res.sendStatus(404)
    } else {
      console.log('results ------->', results)
      // res.sendStatus(200)
      res.json(results)
    }
  })
})

// this the post
app.post('/api/cows', (req, res) => {

  var queryPost = "INSERT INTO cows (cowName, cowDescription) VALUES( ?, ?)"
  var insertVals = [req.body.cowName, req.body.cowDescription];

  // const {name, description} = req.body
  // var cowDescription = req.body.description;

  console.log('---->', req.body);
  try{
    db.query(queryPost, insertVals, function (err, results) {
      if (err) {
        console.log('#################',err)
        res.status(500).json({err})
      } else {
        console.log('results ------->', results)
        // res.sendStatus(200)
        res.json({cowName: req.body.cowName, cowDescription: req.body.cowDescription});
      }
    })

  } catch(err) {
    res.status(500).json({err})
  }
})




//todo -> need to have the DELETE & PUT METHODS

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})