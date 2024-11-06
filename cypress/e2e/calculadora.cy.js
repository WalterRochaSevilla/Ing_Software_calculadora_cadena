describe("Sumador", () => {
  it("recibe una cadena vacia y devuelve 0", () => {
    cy.visit("/");
    cy.get("#numeros").type(" ");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "0");
  });
  it("recibe una cadena con 2 números y devuelve 5", () => {
    cy.visit("/");
    cy.get("#numeros").type("3,2");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "5");
  });
  it("recibe una cadena con 2 números separados por ',' y devuelve la suma", () => {
    cy.visit("/");
    cy.get("#numeros").type("7,2");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "9");
  });
  it("recibe una cadena con 3 números separados por '- y ,' y devuelve la suma", () => {
    cy.visit("/");
    cy.get("#numeros").type("1-2,3");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "6");
  });
});
