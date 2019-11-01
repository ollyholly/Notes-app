describe("Notes App Tests", function() {
  it("Visit the page and tests the initial state", function() {
    cy.visit("/");
    cy.get("#header").should("contain", "Notes");
    cy.get("#content").should("be.empty");
    cy.get("#form").should("contain", "Submit");
  });
  it("Create a new note", function() {
    cy.get("#content")
      .type("My first note.")
      .should("have.value", "My first note.");
    cy.contains("Submit").click();
    cy.get("#app").should("contain", "My first note.");
  });
  it("Create a long note and access it full text", function() {
    cy.get("#content").type(
      "My second note. It's much longer than the first one."
    );
    cy.contains("Submit").click();
    cy.get("#app").should("contain", "My second note.");
    cy.get("#app")
      .contains("My second note.")
      .click();
    cy.url().should("include", "/#notes/2");
    cy.get("#note").should(
      "contain",
      "My second note. It's much longer than the first one."
    );
  });
});
