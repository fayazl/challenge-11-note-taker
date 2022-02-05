const router = require("express").Router();
const notes = require('../../db/db.json')
const { newNote } = require('../../lib/notes')


app.get('/notes', (req, res) => {
    res.json(notes);
  });