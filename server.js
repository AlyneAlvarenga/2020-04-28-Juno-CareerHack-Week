const express = require('express');

const app = express();

//register static middleware (between front and backend, in the middle of two pieces of code)
const staticMiddelware = express.static('public')
app.use(staticMiddelware);

let numberofClicks = 0;

//changed route because want index.html to be served from the root
app.get('/api/json', (req, res) => {
  const json = {};
  json.message = "Hello World Againnnn"
  json.otherMessage = 'Huh'
  json.numberofClicks = numberofClicks;
  res.json(json);
});

app.post('/api/json', (req, res) => {
  numberofClicks++;
  res.redirect('/');
})

app.listen(3000, () => {
  console.log('working');

});