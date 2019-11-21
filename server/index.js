// my reqs and post
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  console.log('testing get!!!')
  res.sendStatus(200)
})
app.post('/', (req, res) => {
  console.log('testing post!!!')
  res.sendStatus(200)
})

app.listen(port, () => { console.log(`App is listening on port ${port}`) })