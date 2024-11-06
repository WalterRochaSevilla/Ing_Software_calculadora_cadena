function calcular(a) {
  if (a.trim() === ""){
    return 0;
  }
  else {
    const numeros = a.split(/,|-/).map(Number);
    return numeros.reduce((acc, num) => acc + num, 0);
  }
}

export default calcular;
