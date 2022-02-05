const router = require("express").Router();
const notes = require('../../db/db.json')




app.get('notes', (req, res) => {
    res.json(notes);
  });