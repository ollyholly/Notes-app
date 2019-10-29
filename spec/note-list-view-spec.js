function testReturningListView() {
  let list = new NoteListModel();
  list.addNote("Hello World");
  let view = new NoteListView(list);
  assert.isTrue(
    view.showNotesHTML() === "<ul><li><div>Hello World</div></li></ul>"
  );
}
testReturningListView();
