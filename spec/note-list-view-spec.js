function testReturningListView() {
  let list = new NoteListModel();
  list.addNote(
    "Renders a string as plaintext, with URLs converted to appropriate"
  );
  let view = new NoteListView(list);
  assert.isTrue(
    view.showNotesHTML() ===
      "<ul><li><div>Renders a string as...</div></li></ul>"
  );
}
testReturningListView();
