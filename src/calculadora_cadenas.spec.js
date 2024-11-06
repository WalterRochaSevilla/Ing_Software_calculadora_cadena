import calcular from "./calculadora.js";

describe("Sumar", () => {
  it("deberia devolver 0", () => {
    expect(calcular(" ")).toEqual(0);
  });
});
