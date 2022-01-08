const notes = [
  {
    title: "Go to Gym",
    body: "Go to Gym two days a week",
  },
  {
    title: "make new habbits",
    body: "Eat healthy food. Work out.",
  },
  {
    title: "improve language",
    body: "Improve English speaking and writing skills",
  },
];

const sortNotes = function (notes) {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes)
console.log(notes)

const findNote = function (notes, noteTitle) {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter((note) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "spe"));

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(note => {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// };

const note = findNote(notes, "improve language");
console.log(note);
