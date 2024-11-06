describe("Sumador", () => {
  it("recibe una cadena vacia y devuelve 0", () => {
    cy.visit("/");
    cy.get("#numeros").type(" ");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "0");
  });
});
