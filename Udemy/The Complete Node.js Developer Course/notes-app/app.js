const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require("./notes");

// setup add command
yargs
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    handler({ title, body }) {
      addNote(title, body);
    },
  })
  .command({
    command: "remove",
    describe: "Removing note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler({ title }) {
      removeNote(title);
    },
  })
  .command({
    command: "list",
    describe: "listing all notes",
    handler() {
      listNotes();
    },
  })
  .command({
    command: "read",
    describe: "reading note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler({ title }) {
      readNote(title);
    },
  }).argv;
