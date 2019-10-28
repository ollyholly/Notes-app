function testAddingNewNote() {
  let list = new NoteList();
  list.addNote("Hello World");
  assert.isTrue(list.allNotes().length === 1);
  assert.isTrue(list.allNotes()[0].getText() === "Hello World");
}
testAddingNewNote();
