const chalk = require("chalk");
const fs = require("fs");

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );
  if (note) {
    console.log(chalk.bold.cyan.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.redBright.inverse("No note found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.bold("Your notes: "));
  notes.forEach((note) => console.log(note.title));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );
  if (duplicateNote) {
    console.log(chalk.bgYellowBright.black("Note title is taken!"));
    return;
  }

  const note = {
    title,
    body,
  };
  notes.push(note);
  saveNotes(notes);
  console.log(chalk.bgGreenBright.black("New note added!"));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter(
    (note) => note.title.toLowerCase() !== title.toLowerCase()
  );
  if (newNotes.length !== notes.length) {
    saveNotes(newNotes);
    console.log(chalk.bgGreenBright.black(`Note (${title}) removed!`));
  } else {
    console.log(chalk.bgRedBright.black("No note found!"));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
