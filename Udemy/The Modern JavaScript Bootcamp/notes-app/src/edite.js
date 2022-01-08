import { removeNote, updateNote } from "./notes";
import { generateLastEdited, initializeEditePage } from "./views";

const noteTitle = document.querySelector("#note-title");
const noteBody = document.querySelector("#note-body");
const lastEdited = document.querySelector("#last-edited");
const removeNoteButton = document.querySelector("#remove-note");

const noteId = location.hash.substring(1);

initializeEditePage(noteId);

// set up note title
noteTitle.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    title: e.target.value,
  });
  lastEdited.textContent = generateLastEdited(note.updatedAt);
});

// set up note body
noteBody.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    body: e.target.value,
  });
  lastEdited.textContent = generateLastEdited(note.updatedAt);
});

// set up note remove button
removeNoteButton.addEventListener("click", () => {
  removeNote(noteId);
  location.assign("./index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") initializeEditePage(noteId);
});
