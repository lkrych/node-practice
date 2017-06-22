// require file system module
const fs = require('fs');

// create JSON object
var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

//stringify object
var originalNoteString = JSON.stringify(originalNote);
//write it to notes.json
fs.writeFileSync('notes.json', originalNoteString);

//read json string from notes.json
var noteString = fs.readFileSync('notes.json');
//parse json string
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
