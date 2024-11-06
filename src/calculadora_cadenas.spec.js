import calcular from "./calculadora.js";

describe("Sumar", () => {
  it("deberia devolver 0", () => {
    expect(calcular(" ")).toEqual(0);
  });
  it("deberia devolver 5", () => {
    expect(calcular("3,2")).toEqual(5);
  });
  it("deberia devolver 9", () => {
    expect(calcular("7,2")).toEqual(9);
  });
  it("deberia devolver 6", () => {
    expect(calcular("1-2,3")).toEqual(6);
  });
  it("deberia devolver la suma para un delimitador personalizado '//[;] 6;7;4'", () => {
    expect(calcular("//[;] 6;7;4")).toEqual(17);
  });
  it("deberia devolver la suma para un delimitador personalizado con comas y guiones '//[;] 6,3-2;1'", () => {
    expect(calcular("//[;] 6,3-2;1")).toEqual(12);
  });
});
