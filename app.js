const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PlaylistRoutes = require('./route/playlistRoute');

app.use(bodyParser.json());

app.use('/playlist', PlaylistRoutes);

module.exports = app;