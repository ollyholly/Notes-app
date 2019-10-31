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

    getNoteByID(id) {
      for (let i = 0; i < this.notes.length; ++i) {
        let note = this.notes[i];
        if (parseInt(id) === note.getID()) {
          return note;
        }
      }
    }
  }
  exports.NoteListModel = NoteListModel;
})(this);
