const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note',{
    title: titleOptions
  })
  .command('remove', 'Remove a note',{
    title: titleOptions
  })
  .help() //shows options with a --help flag
  .argv;
let command = argv._[0];

if (command === "add"){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    notes.logNote(note);
  } else {
    console.log("Note title already exists");
  }
} else if (command === "list"){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === "read"){
  var note = notes.readNote(argv.title);
  if(note){
    notes.logNote(note);
  }else{
    console.log(`That note with title ${argv.title} wasn't found`);
  }
} else if (command === "remove"){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ?
  `Note with title ${argv.title} was removed.` : "Note not found";
  console.log(message);
}
 else{
  console.log('Command not recognized.');
}
