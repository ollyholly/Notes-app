(function(exports) {
  class NoteView {
    constructor(NoteModel) {
      this.NoteModel = NoteModel;
    }

    showSingleNoteHTML() {
      let note = this.NoteModel.getText();
      return `<div>${note}</div>`;
    }
  }
  exports.NoteView = NoteView;
})(this);
