function noteIsCreatedWithUniqueID() {
  let text = "Hello World";
  let newNote = new NoteModel(text);
  console.log(newNote.getID());
  assert.isTrue(newNote.getID() === 1);
}
noteIsCreatedWithUniqueID();

function noteStoresTextOnInstantiation() {
  let text = "Hello";
  let note = new NoteModel(text);
  assert.isTrue(note.getText() === "Hello");
}
noteStoresTextOnInstantiation();
