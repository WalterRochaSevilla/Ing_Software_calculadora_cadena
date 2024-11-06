import calcular from "./calculadora.js"; 

const input = document.querySelector("#numeros"); 
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const cadenaNumeros = input.value; 
  const resultado = calcular(cadenaNumeros); 

  div.innerHTML = `<p>Resultado: ${resultado}</p>`; 
});
