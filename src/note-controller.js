(function(exports) {
  class NoteController {
    constructor() {}

    howdy() {
      var element = document.getElementById("app");
      element.innerHTML = "howdy";
    }
  }
  exports.NoteController = NoteController;
})(this);
noteController = new NoteController();
noteController.howdy();
