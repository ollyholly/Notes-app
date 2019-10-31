(function(exports) {
  class NoteController {
    constructor(NoteListModel) {
      this.NoteListModel = NoteListModel;
    }

    renderHTML(doc = document) {
      let view = new NoteListView(this.NoteListModel);
      doc.getElementById("app").innerHTML = view.showNotesHTML();
    }

    hashChangeListener() {
      window.addEventListener("hashchange", this.hashChange.bind(this));
    }

    hashChange() {
      let id = window.location.hash.split("/")[1];
      let note = this.NoteListModel.getNoteByID(id);
      document.getElementById("note").innerHTML = note.getText();
    }
  }
  exports.NoteController = NoteController;
})(this);

let list = new NoteListModel();
list.addNote("Hello World");
list.addNote("Another Hello World");
noteController = new NoteController(list);
noteController.renderHTML();
noteController.hashChangeListener();
