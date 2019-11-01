(function(exports) {
  class NoteController {
    constructor(NoteListModel) {
      this.NoteListModel = NoteListModel;
      this.view = new NoteListView(this.NoteListModel);
    }

    renderHTML(doc = document) {
      doc.getElementById("app").innerHTML = this.view.showNotesHTML();
    }

    eventListeners() {
      window.addEventListener("hashchange", this.hashChange.bind(this));

      let form = document.getElementById("form");

      form.addEventListener("submit", this.formSubmit.bind(this));
    }

    hashChange() {
      let id = window.location.hash.split("/")[1];
      let note = this.NoteListModel.getNoteByID(id);
      document.getElementById("note").innerHTML = note.getText();
    }

    formSubmit() {
      event.preventDefault();
      let content = document.getElementById("content").value;
      this.NoteListModel.addNote(content);
      this.renderHTML();
      document.getElementById("content").value = "";
    }
  }
  exports.NoteController = NoteController;
})(this);

noteController = new NoteController(new NoteListModel());
noteController.eventListeners();
