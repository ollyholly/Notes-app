function noteStoresTextOnInstantiation() {
  let text = "Hello";
  let note = new Note(text);
  assert.isTrue(note.getText() === "Hello");
}
noteStoresTextOnInstantiation();
