(function(exports) {
  class NoteList {
    constructor() {
      this.notes = [];
    }

    addNote(text) {
      let newNote = new Note(text);
      this.notes.push(newNote);
    }

    allNotes() {
      return this.notes;
    }
  }
  exports.NoteList = NoteList;
})(this);
