const express = require('express');
const router = express.Router();
const PlaylistController =  require('../controller/playlistController');

router.get('/', PlaylistController.getPlaylist);
router.post('/', PlaylistController.addSong);
router.get('/:id', PlaylistController.getSong);
router.put('/:id', PlaylistController.playSong);
router.get('/mostplayed', PlaylistController.mostPlayed);

module.exports = router;