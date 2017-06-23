console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body)=> {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) =>  note.title === title);
  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  var notes = fetchNotes();
  return notes;
};

var readNote = (title) => {
  var notes = fetchNotes();
  var noteToRead = notes.filter((note) => note.title === title);
  return noteToRead.shift();
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) =>  note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log(`Your note ---`);
  console.log(` title: ${note.title}, body: ${note.body}`);
  console.log(`---`);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};
