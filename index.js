const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/song', bodyParser.json(), (req, res) => {
    
    const title = req.body.title;
    const artist = req.body.artist;
    const url = req.body.url;

    res.status(201).send("Created!");
})

app.get('/song', (req, res) => {
  
  const song = [$title, $artist, $url];
  res.status(200).send($song);
})

app.get('/song/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.status(200);
})

app.listen(port, () => {
  console.log(`This App listening on port ${port}`)
});