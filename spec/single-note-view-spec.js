function testReturningSingleNoteView() {
  let note = new NoteModel("Hello World");
  let view = new NoteView(note);
  assert.isTrue(view.showSingleNoteHTML() === "<div>Hello World</div>");
}
testReturningSingleNoteView();
