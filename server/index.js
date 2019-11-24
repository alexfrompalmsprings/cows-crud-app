// express & port
const express = require('express');
const app = express();
const port = 3005;
const path = require('path');
const parser = require('body-parser');
const cowRouter = require('./routes')

// connects the db
const db = require("./db");

/*
USEFUL LINKE
https://codewithhugo.com/parse-express-json-form-body/
*/
app.use(parser.json())
app.use(express.json())
// false when a passing a simple submit form; keep it true when you are sending arrays of maps of values
app.use(express.urlencoded({
  extended: true
}))

// app.use(express.static(__dirname));
// console.log(__dirname);
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('public'))


app.use('/api', cowRouter)






//todo -> need to have the DELETE & PUT METHODS

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})