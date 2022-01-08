import moment from "moment";
import { sortNotes, getNotes } from "./notes";
import { getFilters } from "./filters";

// generate last edited text
const generateLastEdited = (timestamp) => {
  return `Last updated ${moment(timestamp).fromNow()}`;
};

// render application notes
const renderNotes = () => {
  const notesContainer = document.querySelector("#notes-container");

  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );
  notesContainer.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteElement = generateNoteDOM(note);
      notesContainer.appendChild(noteElement);
    });
  } else {
    const temporaryElement = document.createElement("h3");
    temporaryElement.textContent = "Start adding todos.";
    temporaryElement.classList.add("empty-message");
    notesContainer.appendChild(temporaryElement);
  }
};

// generate note dom
const generateNoteDOM = (note) => {
  const noteElement = document.createElement("a");
  const textElement = document.createElement("p");
  const status = document.createElement("p");

  // set up text element
  if (note.title.length > 0) {
    textElement.textContent = note.title;
  } else {
    textElement.textContent = "Unnamed note";
  }
  textElement.classList.add("list-item__title");
  noteElement.appendChild(textElement);

  // set up link
  noteElement.setAttribute("href", `./edite.html#${note.id}`);
  noteElement.classList.add("list-item");

  // set up status
  status.textContent = generateLastEdited(note.updatedAt);
  status.classList.add("list-item__subtitle");
  noteElement.appendChild(status);

  return noteElement;
};

const initializeEditePage = (noteId) => {
  const noteTitle = document.querySelector("#note-title");
  const noteBody = document.querySelector("#note-body");
  const lastEdited = document.querySelector("#last-edited");

  const notes = getNotes();
  const note = notes.find((note) => note.id == noteId);

  if (!note) {
    location.assign("./index.html");
  }
  noteTitle.value = note.title;
  noteBody.value = note.body;
  // set up last edited text
  lastEdited.textContent = generateLastEdited(note.updatedAt);
};

export {
  generateLastEdited,
  generateNoteDOM,
  renderNotes,
  initializeEditePage,
};
