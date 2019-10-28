(function(exports) {
  class NoteListModel {
    constructor() {
      this.notes = [];
    }

    addNote(text) {
      let newNote = new NoteModel(text);
      this.notes.push(newNote);
    }

    allNotes() {
      return this.notes;
    }
  }
  exports.NoteListModel = NoteListModel;
})(this);
