(function(exports) {
  class NoteController {
    constructor(NoteListModel) {
      this.NoteListModel = NoteListModel;
    }

    renderHTML(doc = document) {
      let view = new NoteListView(this.NoteListModel);
      doc.getElementById("app").innerHTML = view.showNotesHTML();
    }
  }
  exports.NoteController = NoteController;
})(this);

// let list = new NoteListModel();
// list.addNote("Hello World");
// noteController = new NoteController(list);
// noteController.renderHTML();
