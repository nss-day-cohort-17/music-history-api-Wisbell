'use strict';

// <require the express Router>
const { Router } = require('express')
const router = Router()

// <require the songCtrl to get access to its methods>
const { getSongs, getOneSong, addSong } = require('../controllers/songCtrl')

// <define routes for getting all songs and a single song>

router.get('/songs', getSongs)
router.get('/songs/:id', getOneSong)

// <stretch: define routes for posting, deleting, editing a song>

router.post('/songs/new', addSong)

// example post request with curl
/*
curl -H "Content-Type: application/json" -X POST -d '{"Title":"Whattt","SongLength":120,"ReleaseDate":"xyz","GenreId":9,"ArtistId":8,"AlbumId":22}' http://localhost:8080/api/v1/songs/new
*/
// router.delete('/shows/:id', deleteSong)

module.exports = router
