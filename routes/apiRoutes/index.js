const router = require("express").Router();
const { notes } = require('../../db/db.json')
const { newNote } = require('../../lib/notes')


router.get('/notes', (req, res) => {
    let display = notes
    res.json(display);
  });

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  const createNote = newNote(req.body, notes);

  res.json(createNote)
});

module.exports = router;