function noteStoresTextOnInstantiation() {
  let text = "Hello";
  let note = new NoteModel(text);
  assert.isTrue(note.getText() === "Hello");
}
noteStoresTextOnInstantiation();
