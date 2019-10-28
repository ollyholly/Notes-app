(function(exports) {
  class NoteModel {
    constructor(text) {
      this.text = text;
    }

    getText() {
      return this.text;
    }
  }

  exports.NoteModel = NoteModel;
})(this);
