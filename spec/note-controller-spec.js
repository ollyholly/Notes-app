function testRenderHTMLwithNoteController() {
  let elementDouble = {
    innerHTML: "double"
  };

  let documentDouble = {
    getElementById: function() {
      return elementDouble;
    }
  };

  let list = new NoteListModel();
  list.addNote("Hello World");
  let controller = new NoteController(list);
  controller.renderHTML(documentDouble);
  assert.isTrue(
    documentDouble.getElementById("app").innerHTML ===
      "<ul><li><div>Hello World</div></li></ul>"
  );
}
testRenderHTMLwithNoteController();
