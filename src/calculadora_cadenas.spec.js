import calcular from "./calculadora.js";

describe("Sumar", () => {
  it("deberia devolver 0", () => {
    expect(calcular(" ")).toEqual(0);
  });
  it("deberia devolver 5", () => {
    expect(calcular("3,2")).toEqual(5);
  });
});
