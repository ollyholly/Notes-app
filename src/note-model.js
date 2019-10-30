(function(exports) {
  class NoteModel {
    constructor(text) {
      this.constructor.counter = (this.constructor.counter || 0) + 1;
      this._id = this.constructor.counter;
      this.text = text;
    }

    getText() {
      return this.text;
    }

    getID() {
      return this._id;
    }
  }

  exports.NoteModel = NoteModel;
})(this);
