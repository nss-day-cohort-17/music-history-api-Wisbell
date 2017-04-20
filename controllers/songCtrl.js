'use strict'


const { bookshelf } = require('../db/database'); // Do I need this?

// <require a song model>
const Song = require('../models/song')

// < use model methods for getting all songs and one song then send the response back with the data>
module.exports.getSongs = (req, res, next) => {
  console.log('getSongs function in songCtrl called')
  Song.getAllSongs()
  .then( (songs) => {
    res.status(200).json(songs)
  })
  .catch( (error) => {
    next(error)
  })
}

module.exports.getOneSong = ( { params: {id} }, res, next) => {
  console.log('getOneSong function in songCtrl called')
  Song.getSingleSong(id)
  .then( (song) => {
    res.status(200).json(song)
  })
  .catch( (error) => {
    next(error)
  })
}
// <stretch goal: methods for adding, deleting, editing a song>
