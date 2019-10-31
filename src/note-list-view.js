(function(exports) {
  class NoteListView {
    constructor(NoteListModel) {
      this.NoteListModel = NoteListModel;
    }

    showNotesHTML() {
      let noteListArray = this.NoteListModel.allNotes().map(
        note =>
          `<li><div><a href="#notes/${note.id}">${note
            .getText()
            .substring(0, 19)}...</a></div></li>`
      );
      let html = noteListArray.join("");
      return "<ul>" + html + "</ul>";
    }
  }
  exports.NoteListView = NoteListView;
})(this);
