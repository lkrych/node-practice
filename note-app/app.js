console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

if (command === "add"){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log(`Your new note ---`);
    console.log(` title: ${note.title}, body: ${note.body}`);
    console.log(`---`);
  } else {
    console.log("Note title already exists");
  }
} else if (command === "list"){
  notes.getAll();
} else if (command === "read"){
  var note = notes.readNote(argv.title);
  if(note){
    console.log(`Your note ---`);
    console.log(` title: ${note.title}, body: ${note.body}`);
    console.log(`---`);
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
